import { DynamicModule, Module, Provider } from '@nestjs/common';
import { IWeatherApiModuleAsyncOptions } from './interfaces/weather-api-module-async-options.interface';
import WeatherSdkService from './weather-sdk.service';

@Module({

  providers: [WeatherSdkService]
})
export default class WeatherSdkModule {
  public static async forRootAsync(options: IWeatherApiModuleAsyncOptions): Promise<DynamicModule> {
    const imports: any[] = [];
    const providers: Provider<any>[] = [];
    const exports: any[] = [];

    if (options.imports) {
      imports.push(...options.imports);
    }

    const appProvider: Provider<Promise<WeatherSdkService>> = {
      provide: WeatherSdkService,
      useFactory: async (...injections): Promise<WeatherSdkService> => {
        const serviceOpions = await options.useFactory(...injections);

        return new WeatherSdkService(serviceOpions);
      },
      inject: options.inject,
    };

    providers.push(appProvider);
    exports.push(appProvider);

    return {
      module: WeatherSdkModule,
      imports,
      providers,
      exports,
    };
  }
}
