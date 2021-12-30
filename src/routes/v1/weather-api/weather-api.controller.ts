import { Controller, Get, HttpCode, HttpStatus, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { WeatherApiService } from './weather-api.service';

import ApiResponses, { ApiSchema } from 'src/decorators/typical-response.decorator';
import WrapResponseInterceptor from 'src/interceptors/wrap-response.interceptor';
import { WeatherByCityNameOptionsDto } from '../weather-sdk/dto/weather-by-city-name-request-options.dto';
import { WeatherByCityNameResponseDto } from '../weather-sdk/dto/weather-by-city-name-response.dto';
import { PeriodEnum } from './enums/period.enum';
import CityPeriodDto from './dto/city-period.dto';
import { StatisticsService } from '../statistics/statistics.service';
import StatisticRecordEntity from '../statistics/schemas/statistic-record.entity';
import { StatisticRecord } from '../statistics/schemas/statistic-record.schema';

@ApiTags('Weather-api')
@ApiExtraModels(WeatherByCityNameResponseDto)
@UseInterceptors(WrapResponseInterceptor)
@Controller()
export class WeatherApiController {
  constructor(private readonly weatherApiService: WeatherApiService, private readonly statisticsService: StatisticsService) {}
  
  @ApiOkResponse({
    schema: ApiSchema(WeatherByCityNameResponseDto),
    description: 'Return the weather of the city with specified name',
  })
  @HttpCode(HttpStatus.OK)
  @ApiResponses()
  @Get('weather/:cityName/:period')
  public async weatherByCityNameAndPeriod(@Param() cityPeriodDto: CityPeriodDto): Promise<StatisticRecord[]> {
    return this.statisticsService.getByCityPeriod(cityPeriodDto);
  }

  @ApiOkResponse({
    schema: ApiSchema(WeatherByCityNameResponseDto),
    description: 'Return the weather of the city with specified name',
  })
  @HttpCode(HttpStatus.OK)
  @ApiResponses()
  @Get('weather/:city')
  public async weatherByCityName(@Param('city') cityNameParam: string): Promise<WeatherByCityNameResponseDto> {
    return this.weatherApiService.weatherByCityName({
      q: cityNameParam,
    });
  }
}
