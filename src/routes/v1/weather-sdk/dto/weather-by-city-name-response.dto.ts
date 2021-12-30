import { ApiProperty } from "@nestjs/swagger";
import CloudDto from "./clouds.dto";
import MainDto from "./main.dto";
import LocationDto from "./position.dto";
import SysDto from "./sys.dto";
import WeatherDto from "./weather.dto";
import WindDto from "./wind.dto";

export class WeatherByCityNameResponseDto {

  @ApiProperty({
    type: LocationDto,
  })
  readonly coord: LocationDto;

  @ApiProperty({
    type: [WeatherDto]
  })
  readonly weather: [WeatherDto];

  @ApiProperty({
    type: String,
  })
  readonly base: string = 'string';

  @ApiProperty({
    type: MainDto,
  })
  readonly main: MainDto;

  @ApiProperty({
    type: Number,
  })
  readonly visibility: Number = 0;

  @ApiProperty({
    type: WindDto,
  })
  readonly wind: WindDto;

  @ApiProperty({
    type: CloudDto,
  })
  readonly clouds: CloudDto;

  @ApiProperty({
    type: Number,
  })
  readonly dt: Number = 0;

  @ApiProperty({
    type: SysDto,
  })
  readonly sys: SysDto;

  @ApiProperty({
    type: Number,
  })
  readonly id: Number = 1;

  @ApiProperty({
    type: String,
  })
  readonly name: string = 'string';

  @ApiProperty({
    type: Number,
  })
  readonly cod: Number = 0;
}