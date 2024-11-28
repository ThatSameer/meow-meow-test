import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import formatNames from './helpers/formatNames';
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

    return {
      title: `Your next delivery for ${formattedNames}`,
      message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${formattedNames}'s fresh food.`,
      totalPrice: 0,
      freeGift: false,
    };
  }
}
