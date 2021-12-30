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

  @ApiProperty({
    enum: ModesEnum,
    default: ModesEnum.JSON,
    required: false,
  })
  readonly mode?: ModesEnum = ModesEnum.JSON;

  @ApiProperty({
    enum: UnitsEnum,
    default: UnitsEnum.STANDART,
    required: false,
  })
  readonly units?: UnitsEnum = UnitsEnum.STANDART;

  @ApiProperty({
    type: String,
    required: false,
  })
  readonly lang?: string = 'ua';
}
  