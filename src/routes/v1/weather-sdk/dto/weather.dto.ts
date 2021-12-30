import { ApiProperty } from "@nestjs/swagger";

export default class WeatherDto {
  @ApiProperty({
    type: Number,
  })
  readonly id: Number = 1;

  @ApiProperty({
    type: String,
  })
  readonly main: string;

  @ApiProperty({
    type: String,
  })
  readonly description: string;

  @ApiProperty({
    type: String,
  })
  readonly icon: string;
}