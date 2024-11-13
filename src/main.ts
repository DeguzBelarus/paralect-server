import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { PORT } from './constants';
import { HttpExceptionFilter } from './exception-filter/exception-filter';

(async () => {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.setGlobalPrefix('api');
    app.use(helmet());
    app.enableCors();
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(PORT, () => {
      console.log('\x1b[40m\x1b[34m\x1b[1m', `Server has been started on port ${PORT}...`);
    });
  } catch (exception: unknown) {
    if (exception instanceof Error) {
      console.error('\x1b[40m\x1b[31m\x1b[1m', exception.message);
    }
  }
})();
