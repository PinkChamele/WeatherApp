import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from '../v1/v1.module';

import configuration from 'src/common/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mongodb',
        url: configService.get('mongodb.url'),
        useNewUrlParser: true,
        synchronize: true,
        logging: true,
        entities: ['dist/**/*.entity{.ts,.js}'],
      }),
    }),
    V1Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
