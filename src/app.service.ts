import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { User } from './interfaces/User';

@Injectable()
export class AppService {
  private readonly dataPath = path.join(__dirname, '..', 'data.json');

  getUserById(userId: string): User {
    const userData = JSON.parse(fs.readFileSync(this.dataPath, 'utf-8'));
    const user = userData.find((user: User) => user.id === userId);

    return user;
  }
}
