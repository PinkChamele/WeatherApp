import { ApiProperty } from "@nestjs/swagger";
import { PeriodEnum } from "../enums/period.enum";

export default class CityPeriodDto {
  @ApiProperty({
    type: String,
  })
  readonly cityName: string;
  @ApiProperty({
    enum: PeriodEnum,
  })
  readonly period: PeriodEnum = PeriodEnum.H24;
}