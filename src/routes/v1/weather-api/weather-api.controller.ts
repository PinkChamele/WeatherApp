import { Controller, Get, HttpCode, HttpStatus, Post, Query, UseInterceptors } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { WeatherApiService } from './weather-api.service';

import ApiResponses, { ApiSchema } from 'src/decorators/typical-response.decorator';
import WrapResponseInterceptor from 'src/interceptors/wrap-response.interceptor';
import { WeatherByCityNameOptionsDto } from '../weather-sdk/dto/weather-by-city-name-request-options.dto';
import { WeatherByCityNameResponseDto } from '../weather-sdk/dto/weather-by-city-name-response.dto';

@ApiTags('Weather-api')
@ApiExtraModels(WeatherByCityNameResponseDto)
@UseInterceptors(WrapResponseInterceptor)
@Controller()
export class WeatherApiController {
  constructor(private readonly weatherApiService: WeatherApiService) {}

  @ApiOkResponse({
    schema: ApiSchema(WeatherByCityNameResponseDto),
    description: 'Return the weather of the city with specified name',
  })
  @HttpCode(HttpStatus.OK)
  @ApiResponses()
  @Get('weather-by-city-name')
  public async weatherByCityName(@Query() weatherByCityNameOptionsDto: WeatherByCityNameOptionsDto): Promise<WeatherByCityNameResponseDto> {
    return this.weatherApiService.weatheByCityName(weatherByCityNameOptionsDto);
  }
}
