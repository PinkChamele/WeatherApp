import { Injectable, Logger } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import PaginationDto from 'src/dto/pagination.dto';
import { InjectModel } from '@nestjs/mongoose';
import CreateStatisticRecordDto from './dto/create-statistic-record.dto';

import { StatisticRecord, StatisticRecordDocument } from './schemas/statistic-record.schema';
import { IPaginatedEntity } from 'src/interfaces/paginated-entity.interface';

@Injectable()
export default class StatisticsRepository {
  constructor(
    // @InjectRepository(StatisticRecordEntity)
    // private readonly statisticsModel: Repository<StatisticRecordEntity>,
    @InjectModel(StatisticRecord.name) private statisticsModel: Model<StatisticRecordDocument>
  ) {}

  public create(createStatisticRecordDto: CreateStatisticRecordDto): Promise<StatisticRecordDocument > {
    const newUser = new this.statisticsModel(createStatisticRecordDto);

    return newUser.save();
  }

  public getById(_id: Types.ObjectId): Promise<StatisticRecord> {
    return this.statisticsModel.findById(_id).lean().exec();
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
}
