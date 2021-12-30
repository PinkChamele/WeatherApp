import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { ModesEnum } from "../enums/modes.enum";
import { UnitsEnum } from "../enums/units.enum";

export class WeatherByCityNameOptionsDto {
  
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly q: string = 'string';
}
  