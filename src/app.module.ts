import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './models/user.models';
import { UserController } from './user/user.controller';
import { Category } from './models/category.models';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [User, Category],
    }),
    TypeOrmModule.forFeature([User, Category])
  ],
  controllers: [AppController, UserController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
