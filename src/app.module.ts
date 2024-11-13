import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import { HttpExceptionFilter } from './exception-filter/exception-filter';
import { WebsocketsModule } from './websockets/websockets.module';

@Module({
  imports: [ConfigModule.forRoot(), WebsocketsModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
