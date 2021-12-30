import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { WeatherByCityNameResponseDto } from '../../weather-sdk/dto/weather-by-city-name-response.dto';

export type StatisticRecordDocument = StatisticRecord & Document;

@Schema({ timestamps: true })
export class StatisticRecord {
  _id: Types.ObjectId;

  @Prop()
  readonly cityName: string = 'string';

  @Prop()
  readonly weather: WeatherByCityNameResponseDto;
}

export const StatisticRecordSchema = SchemaFactory.createForClass(StatisticRecord);
