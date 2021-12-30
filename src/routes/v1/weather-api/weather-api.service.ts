import { Injectable } from '@nestjs/common';

import { StatisticsService } from '../statistics/statistics.service';
import WeatherSdkService from '../weather-sdk/weather-sdk.service';
import { WeatherByCityNameOptionsDto } from '../weather-sdk/dto/weather-by-city-name-request-options.dto';
import { WeatherByCityNameResponseDto } from '../weather-sdk/dto/weather-by-city-name-response.dto';

@Injectable()
export class WeatherApiService {
  constructor(private readonly weatherSdkService: WeatherSdkService, private readonly statisticsService: StatisticsService) {}

  public async weatheByCityName(weatherByCityNameOptionsDto: WeatherByCityNameOptionsDto): Promise<WeatherByCityNameResponseDto> {
    await this.statisticsService.create({
      cityName: weatherByCityNameOptionsDto.q,
    });

    return this.weatherSdkService.weatherByCityName(weatherByCityNameOptionsDto);
  }
}
