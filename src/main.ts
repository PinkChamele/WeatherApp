import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

import TransformValidationErrors from './common/functions/transform-validation-errors';
import AppModule from './routes/app/app.module';
import AllExceptionsFilter from './filters/all-exceptions.filter';
import ValidationExceptionFilter from './filters/bad-request-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const options = new DocumentBuilder()
    .setTitle('Api v1')
    .setVersion('1.0')
    .addBearerAuth({ in: 'header', type: 'http' })
    .build();
  const document = SwaggerModule.createDocument(app, options);
  const port = configService.get('port') || 3000;

  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    exceptionFactory: TransformValidationErrors,
  }));
  app.useGlobalFilters(new AllExceptionsFilter(), new ValidationExceptionFilter());
  SwaggerModule.setup('api', app, document);

  await app.listen(port, async () => {
    Logger.log(`The server is running on ${port} port: http://localhost:${port}/api`);
  });
}
bootstrap();
