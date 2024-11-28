import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as fs from 'fs';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import mockUsers from '../helpers/mockUsers';

jest.mock('fs');

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify(mockUsers));

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('root', () => {
    it('should return the correct delivery details for the given user ID', () => {
      expect(appController.getNextDelivery('1')).toEqual({
        title: `Your next delivery for Kitty`,
        message: `Hey Bob! In two days' time, we'll be charging you for your next order for Kitty's fresh food.`,
        totalPrice: 0,
        freeGift: false,
      });
    });

    it('should throw an error if user is not found', () => {
      try {
        appController.getNextDelivery('notexistentuser');
      } catch (error: any) {
        expect(error).toBeInstanceOf(HttpException);
        expect(error.response).toBe('User ID: notexistentuser not found');
        expect(error.status).toBe(HttpStatus.NOT_FOUND);
      }
    });

    it('should format cat names correctly if there are 2 active subscriptions', () => {
      expect(appController.getNextDelivery('2')).toEqual({
        title: `Your next delivery for Whiskers and Paws`,
        message: `Hey John! In two days' time, we'll be charging you for your next order for Whiskers and Paws's fresh food.`,
        totalPrice: 0,
        freeGift: false,
      });
    });

    it('should format cat names correctly if there are 3 active subscriptions', () => {
      expect(appController.getNextDelivery('3')).toEqual({
        title: `Your next delivery for Simba, Olive and Milo`,
        message: `Hey Sarah! In two days' time, we'll be charging you for your next order for Simba, Olive and Milo's fresh food.`,
        totalPrice: 0,
        freeGift: false,
      });
    });
  });
});
