// auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(payload: any): Promise<any> {
    // Check if user exists
    return await this.usersService.findOne(payload.sub);
  }
}
