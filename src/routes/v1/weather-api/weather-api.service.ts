import { Injectable } from '@nestjs/common';
import { WeatherByCityNameOptionsDto } from '../weather-sdk/dto/weather-by-city-name-request-options.dto';
import { WeatherByCityNameResponseDto } from '../weather-sdk/dto/weather-by-city-name-response.dto';
import WeatherSdkService from '../weather-sdk/weather-sdk.service';

@Injectable()
export class WeatherApiService {
  constructor(private readonly weatherSdkService: WeatherSdkService) {}

  public async weatheByCityName(weatherByCityNameOptionsDto: WeatherByCityNameOptionsDto): Promise<WeatherByCityNameResponseDto> {
    return this.weatherSdkService.weatherByCityName(weatherByCityNameOptionsDto);
  }
}
