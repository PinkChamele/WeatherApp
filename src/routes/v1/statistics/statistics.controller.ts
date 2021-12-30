import { Controller, Get, HttpCode, HttpStatus, Logger, Query, UseInterceptors } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import ApiResponses, { ApiSchema } from 'src/decorators/typical-response.decorator';
import PaginationDto from 'src/dto/pagination.dto';
import WrapResponseInterceptor from 'src/interceptors/wrap-response.interceptor';
import { IPaginatedEntity } from 'src/interfaces/paginated-entity.interface';
import StatisticRecordEntity from './schemas/statistic-record.entity';
import { StatisticRecord } from './schemas/statistic-record.schema';
import { StatisticsService } from './statistics.service';

@ApiTags('Statistics')
@ApiExtraModels(StatisticRecordEntity)
@UseInterceptors(WrapResponseInterceptor)
@Controller()
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @ApiOkResponse({
    schema: ApiSchema(StatisticRecordEntity),
    description: 'Return all paginated statistic records from database',
  })
  @HttpCode(HttpStatus.OK)
  @ApiResponses()
  @Get('get-all')
  public async weatherByCityName(@Query() paginationParams: PaginationDto): Promise<IPaginatedEntity<StatisticRecord>> {
    return this.statisticsService.getAllPaginated(paginationParams);
  }
}
