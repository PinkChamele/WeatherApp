import { request } from 'undici';

import { Injectable } from '@nestjs/common';

import { IWeatherSdkServiceOptions } from './interfaces/weather-api-service-options.interface';
import { IRequestApiOptions } from './interfaces/request-api-options.interface';
import { WeatherByCityNameOptionsDto } from './dto/weather-by-city-name-request-options.dto';
import { RequestMethodEnum } from './enums/request-method.enum';
import { WeatherByCityNameResponseDto } from './dto/weather-by-city-name-response.dto';

@Injectable()
export default class WeatherSdkService {
  constructor(private readonly options: IWeatherSdkServiceOptions) {}

  private async requestApi<OptionsType>(requestApiOptions: IRequestApiOptions<OptionsType>) {
    const url = new URL(`${this.options.host}${requestApiOptions.url}`);

    for (const [key, value] of Object.entries(requestApiOptions.options)) {
      url.searchParams.append(key, value);
    }
    url.searchParams.append('appid', this.options.apikey);

    const res = await request(
      url,
      {
        method: requestApiOptions.method,
      },
    );

    return res.body.json();
  }

  public async weatherByCityName(weatherByCityNameOptions: WeatherByCityNameOptionsDto): Promise<WeatherByCityNameResponseDto> {
    const requestOptions: IRequestApiOptions<WeatherByCityNameOptionsDto> = {
      url: 'weather',
      method: RequestMethodEnum.GET,
      options: weatherByCityNameOptions,
    }
    const res = await this.requestApi<WeatherByCityNameOptionsDto>(requestOptions);

    return res;
  }
}
