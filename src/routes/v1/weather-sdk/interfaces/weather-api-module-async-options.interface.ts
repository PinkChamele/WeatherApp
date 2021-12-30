import { DynamicModule, Type, ForwardReference } from "@nestjs/common";
import { IWeatherSdkServiceOptions } from "./weather-api-service-options.interface";

export interface IWeatherApiModuleAsyncOptions {
  imports: (
    | DynamicModule
    | Type<any>
    | Promise<DynamicModule>
    | ForwardReference<any>
  )[];
  inject: any[];
  useFactory: (...args: any[]) => Promise<IWeatherSdkServiceOptions>;
}
