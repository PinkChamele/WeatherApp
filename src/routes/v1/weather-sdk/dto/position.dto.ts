import { ApiProperty } from "@nestjs/swagger";

export default class LocationDto {
  @ApiProperty({
    type: Number,
  })
  readonly lon: Number = 0;
  @ApiProperty({
    type: Number,
  })
  readonly lat: Number = 0;
}