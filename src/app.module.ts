import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { HttpExceptionFilter } from './exception-filter/exception-filter';
import { WebsocketsModule } from './websockets/websockets.module';
import { MONGO_DB_ACCESS_STRING } from './constants';
import { ReplyModule } from './reply/reply.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGO_DB_ACCESS_STRING),
    WebsocketsModule,
    ReplyModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
