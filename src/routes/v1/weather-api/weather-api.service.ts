import { Injectable, Logger } from '@nestjs/common';

import { StatisticsService } from '../statistics/statistics.service';
import WeatherSdkService from '../weather-sdk/weather-sdk.service';
import { WeatherByCityNameOptionsDto } from '../weather-sdk/dto/weather-by-city-name-request-options.dto';
import { WeatherByCityNameResponseDto } from '../weather-sdk/dto/weather-by-city-name-response.dto';

@Injectable()
export class WeatherApiService {
  constructor(private readonly weatherSdkService: WeatherSdkService, private readonly statisticsService: StatisticsService) {}

  public async weatherByCityName(weatherByCityNameOptionsDto: WeatherByCityNameOptionsDto): Promise<WeatherByCityNameResponseDto> {
    let res: WeatherByCityNameResponseDto;
    const recent = await this.statisticsService.getRecent();
  
    if (recent.length !== 0) {
      res = recent[0].weather;
    } else {
      res = await this.weatherSdkService.weatherByCityName(weatherByCityNameOptionsDto);
      await this.statisticsService.create({
        cityName: weatherByCityNameOptionsDto.q,
        weather: res,
      });
    }

    return res
  }
}
