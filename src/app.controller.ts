import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('comms')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('your-next-delivery/:id')
  getNextDelivery(@Param('id') id: string): string {
    return `The id is ${id}`;
  }
}
