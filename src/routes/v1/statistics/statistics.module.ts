import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

import StatisticsRepository from './statistics.repository';
import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';
import { StatisticRecord, StatisticRecordSchema } from './schemas/statistic-record.schema';

@Module({
  imports: [
    // [TypeOrmModule.forFeature([StatisticRecordEntity])],
    MongooseModule.forFeature([{ name: StatisticRecord.name, schema: StatisticRecordSchema }]),
  ],
  providers: [StatisticsService, StatisticsRepository],
  exports: [StatisticsService],
  controllers: [StatisticsController],
})
export class StatisticsModule {}
