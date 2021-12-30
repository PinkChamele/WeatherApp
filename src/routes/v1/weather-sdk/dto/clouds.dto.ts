import { ApiProperty } from "@nestjs/swagger";

export default class CloudDto {
  @ApiProperty({
    type: Number,
  })
  readonly all: Number = 0;
}
