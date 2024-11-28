import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as fs from 'fs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './interfaces/User';

jest.mock('fs');

describe('AppController', () => {
  let appController: AppController;

  const mockResult: User[] = [
    {
      id: '1',
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bobsmith@fake.com',
      cats: [
        {
          name: 'Kitty',
          subscriptionActive: true,
          breed: 'Turkish Van',
          pouchSize: 'A',
        },
      ],
    },
    {
      id: '2',
      firstName: 'John',
      lastName: 'Davies',
      email: 'johndavies@test.com',
      cats: [
        {
          name: 'Whiskers',
          subscriptionActive: true,
          breed: 'Bombay',
          pouchSize: 'A',
        },
        {
          name: 'Paws',
          subscriptionActive: false,
          breed: 'Chartreux',
          pouchSize: 'C',
        },
      ],
    },
  ];

  beforeEach(async () => {
    (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify(mockResult));

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
        title: `Your next delivery for <cat names, separated by comma or 'and'>`,
        message: `Hey Bob! In two days' time, we'll be charging you for your next order for <cat names, formatted as described below>'s fresh food.`,
        totalPrice: 0,
        freeGift: false,
      });
    });

    it('should throw an error if user is not found', () => {
      try {
        appController.getNextDelivery('notexistentuser');
      } catch (error: any) {
        expect(error).toBeInstanceOf(HttpException);
        expect(error.response).toBe('User with id notexistentuser not found');
        expect(error.status).toBe(HttpStatus.NOT_FOUND);
      }
    });
  });
});
