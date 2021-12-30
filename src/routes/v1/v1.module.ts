import { Module } from '@nestjs/common';

import { Routes, RouterModule } from 'nest-router';
import { WeatherApiModule } from './weather-api/weather-api.module';

const routes: Routes = [{
    path: '/v1',
    children: [
      { path: '/weather-api', module: WeatherApiModule },
    ],
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    WeatherApiModule,
  ],
})
export class V1Module {}
