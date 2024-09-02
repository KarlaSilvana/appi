import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      //'mongodb+srv://karlasil:karla-4569@cluster0.nevio.mongodb.net/monkeywitdb?retryWrites=true&w=majority&appName=Cluster0'
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.nevio.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=${process.env.MONGODB_CLUSTER}`
    ), 
    TodoModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
