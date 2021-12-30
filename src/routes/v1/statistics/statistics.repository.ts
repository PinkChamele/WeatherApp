import * as moment from 'moment';
import { Injectable, Logger } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import PaginationDto from 'src/dto/pagination.dto';
import { InjectModel } from '@nestjs/mongoose';
import CreateStatisticRecordDto from './dto/create-statistic-record.dto';

import { StatisticRecord, StatisticRecordDocument } from './schemas/statistic-record.schema';
import { IPaginatedEntity } from 'src/interfaces/paginated-entity.interface';
import CityPeriodDto from '../weather-api/dto/city-period.dto';
import { PeriodEnum } from '../weather-api/enums/period.enum';
import StatisticRecordEntity from './schemas/statistic-record.entity';

@Injectable()
export default class StatisticsRepository {
  constructor(
    // @InjectRepository(StatisticRecordEntity)
    // private readonly statisticsModel: Repository<StatisticRecordEntity>,
    @InjectModel(StatisticRecord.name) private statisticsModel: Model<StatisticRecordDocument>
  ) {}

  public create(createStatisticRecordDto: CreateStatisticRecordDto): Promise<StatisticRecordDocument> {
    const newUser = new this.statisticsModel(createStatisticRecordDto);

    return newUser.save();
  }

  public getById(_id: Types.ObjectId): Promise<StatisticRecord> {
    return this.statisticsModel.findById(_id).lean().exec();
  }

  public getRecent(): Promise<StatisticRecord[]> {
    return this.statisticsModel.find({
      createdAt: {
        $gte: moment().add(-2, 'hour').format()
      },
    }).sort({ createdAt: -1 })
    .lean().exec();
  }

  public async getAllPaginated(paginationParams: PaginationDto): Promise<IPaginatedEntity<StatisticRecord>> {
    const records = await this.statisticsModel
    .find()
    .limit(paginationParams.limit)
    .skip((paginationParams.page - 1) * paginationParams.limit)
    .sort({
      cityName: 'asc',
    })
    .lean()
    .exec();

    return {
      paginatedResult: records,
      totalCount: records.length,
    };
  }

  public async getAllByCityPeriod(cityPeriodDto: CityPeriodDto): Promise<StatisticRecord[]> {
    if (cityPeriodDto.period === PeriodEnum.H24) {
      const res = await this.statisticsModel.find({
        cityName: cityPeriodDto.cityName,
        createdAt: {$gte: moment().add(-24, 'hour').format() },
      }).lean().exec();

      return res;
    }
    else if (cityPeriodDto.period === PeriodEnum.MONTH) {
      return this.statisticsModel.find({
        cityName: cityPeriodDto.cityName,
        createdAt: {$gte: moment().add(-1, 'month').format() },
      }).lean().exec();
    }
    else if (cityPeriodDto.period === PeriodEnum.WEEK) {
      return this.statisticsModel.find({
        cityName: cityPeriodDto.cityName,
        createdAt: {$gte: moment().add(-1, 'week').format() },
      }).lean().exec();
    }
    else if (cityPeriodDto.period === PeriodEnum.TODAY) {
      return this.statisticsModel.find({
        cityName: cityPeriodDto.cityName,
        createdAt: {$gte: moment().startOf('day').format() },
      }).lean().exec();
    }

    return [];
  }
}
