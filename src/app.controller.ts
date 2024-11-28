import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { GetNextDelivery } from './interfaces/GetNextDelivery';

@Controller('comms')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('your-next-delivery/:userId')
  getNextDelivery(@Param('userId') userId: string): GetNextDelivery {
    const user = this.appService.getUserById(userId);

    if (!user) {
      throw new HttpException(
        `User with id ${userId} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    console.log(user);

    return {
      title: `Your next delivery for <cat names, separated by comma or 'and'>`,
      message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for <cat names, formatted as described below>'s fresh food.`,
      totalPrice: 0,
      freeGift: false,
    };
  }
}
