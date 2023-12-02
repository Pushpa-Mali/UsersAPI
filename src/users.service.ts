
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({where:{id}});

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async update(id: number, user: User): Promise<User> {
    await this.findOne(id); // Check if the user exists

    await this.usersRepository.update(id, user);
    return this.usersRepository.findOne({where:{id}});
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id); // Check if the user exists

    await this.usersRepository.remove(user);
  }
}
