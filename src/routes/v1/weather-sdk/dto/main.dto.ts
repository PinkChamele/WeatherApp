import { ApiProperty } from "@nestjs/swagger";

export default class MainDto {
  @ApiProperty({
    type: Number,
  })
  readonly temp: Number;

  @ApiProperty({
    type: Number,
  })
  readonly pressure: Number;

  @ApiProperty({
    type: Number,
  })
  readonly humidity: Number;

  @ApiProperty({
    type: Number,
  })
  readonly temp_min: Number;

  @ApiProperty({
    type: Number,
  })
  readonly temp_max: Number;
}