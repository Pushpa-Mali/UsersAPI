// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from './users.module'; // Assuming UsersModule is in a sibling directory

@Module({
  imports: [
    UsersModule, // Importing UsersModule to use its services or entities
    JwtModule.register({
      secret: 'your_secret_key', // Replace with your actual secret key
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService], // Make AuthService available for dependency injection in other modules
})
export class AuthModule {}
