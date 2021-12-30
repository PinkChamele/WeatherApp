import { ApiProperty } from "@nestjs/swagger";

export default class WindDto {
  @ApiProperty({
    type: Number,
  })
  speed: Number;
  
  @ApiProperty({
    type: Number,
  })
  deg: Number;
}