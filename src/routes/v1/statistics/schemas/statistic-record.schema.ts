import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type StatisticRecordDocument = StatisticRecord & Document;

@Schema({ timestamps: true })
export class StatisticRecord {
  _id: Types.ObjectId;

  @Prop()
  readonly cityName: string = 'string';
}

export const StatisticRecordSchema = SchemaFactory.createForClass(StatisticRecord);
