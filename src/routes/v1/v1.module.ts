import { Module } from '@nestjs/common';

import { Routes, RouterModule } from 'nest-router';
import { WeatherApiModule } from './weather-api/weather-api.module';
import { StatisticsModule } from './statistics/statistics.module';

const routes: Routes = [{
    path: '/v1',
    children: [
      { path: '/weather-api', module: WeatherApiModule },
      { path: '/statistics', module: StatisticsModule },
    ],
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    WeatherApiModule,
    StatisticsModule,
  ],
})
export class V1Module {}
