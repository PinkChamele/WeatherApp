import { Injectable, Logger } from '@nestjs/common';
import PaginationDto from 'src/dto/pagination.dto';
import { IPaginatedEntity } from 'src/interfaces/paginated-entity.interface';
import CityPeriodDto from '../weather-api/dto/city-period.dto';
import CreateStatisticRecordDto from './dto/create-statistic-record.dto';
import StatisticRecordEntity from './schemas/statistic-record.entity';
import { StatisticRecord } from './schemas/statistic-record.schema';
import StatisticsRepository from './statistics.repository';

@Injectable()
export class StatisticsService {
  constructor(private readonly statisticsRepository: StatisticsRepository) {
  }
  
  public async create(createStatisticRecordDto: CreateStatisticRecordDto) {
    this.statisticsRepository.create(createStatisticRecordDto);
  }

  public async getAllPaginated(paginationParams: PaginationDto): Promise<IPaginatedEntity<StatisticRecord>> {
    return this.statisticsRepository.getAllPaginated(paginationParams);
  }

  public async getRecent() {
    return this.statisticsRepository.getRecent();
  }

  public async getByCityPeriod(cityPeriodDto: CityPeriodDto) {
    return this.statisticsRepository.getAllByCityPeriod(cityPeriodDto);
  }
}
