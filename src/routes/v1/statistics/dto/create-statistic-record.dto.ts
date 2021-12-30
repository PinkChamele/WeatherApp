import { WeatherByCityNameResponseDto } from "../../weather-sdk/dto/weather-by-city-name-response.dto";

export default class CreateStatisticRecordDto {
  readonly cityName: string = '';
  readonly weather: WeatherByCityNameResponseDto;
}
