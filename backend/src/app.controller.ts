import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import formatNames from './helpers/formatNames';
import pouchPrices from './helpers/pouchPrices';
import { Cat } from './interfaces/Cat';
import { GetNextDelivery } from './interfaces/GetNextDelivery';

@Controller('comms')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('your-next-delivery/:userId')
  getNextDelivery(@Param('userId') userId: string): GetNextDelivery {
    const user = this.appService.getUserById(userId);
    if (!user) {
      throw new HttpException(
        `User ID: ${userId} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    const activeSubs = user.cats.filter((cat: Cat) => cat.subscriptionActive);
    if (!activeSubs.length) {
      throw new HttpException(
        `User ID: ${userId} does not have any active subscriptions`,
        HttpStatus.NOT_FOUND,
      );
    }

    const catNames = activeSubs.map((cat: Cat) => cat.name);
    const formattedNames = formatNames(catNames);

    const totalPrice = activeSubs.reduce(
      (sum: number, cat: Cat) => sum + pouchPrices[cat.pouchSize],
      0,
    );
    // Although README displays totalPrice as a number, this doesn't work since JS drops trailing zeroes
    const formattedPrice = parseFloat(totalPrice.toFixed(2));

    const freeGift = totalPrice > 120;

    return {
      title: `Your next delivery for ${formattedNames}`,
      message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${formattedNames}'s fresh food.`,
      totalPrice: formattedPrice,
      freeGift: freeGift,
    };
  }
}
