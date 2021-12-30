import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WeatherApiService } from './weather-api.service';
import { WeatherApiController } from './weather-api.controller';
import WeatherSdkModule from '../weather-sdk/open-weather-sdk.module';

@Module({
  imports: [
    WeatherSdkModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        apikey: configService.get('weatherApi.apikey'),
        host: configService.get('weatherApi.host'),
      }),
    }),
  ],
  providers: [WeatherApiService],
  controllers: [WeatherApiController],
})
export class WeatherApiModule {}
