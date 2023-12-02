import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule],
})
export class AppModule {}