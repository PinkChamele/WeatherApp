import { ApiProperty } from "@nestjs/swagger";

export default class SysDto  {
  @ApiProperty({
    type: Number,
  })
  readonly type: Number = 1;

  @ApiProperty({
    type: Number,
  })
  readonly id: Number = 1;

  @ApiProperty({
    type: Number,
  })
  readonly message: Number = 1;

  @ApiProperty({
    type: String,
  })
  readonly country: string = 'string';

  @ApiProperty({
    type: Number,
  })
  readonly sunrise: Number = 0;

  @ApiProperty({
    type: Number,
  })
  readonly sunset: Number = 0;
}