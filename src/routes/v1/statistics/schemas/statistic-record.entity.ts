import {
    Entity,
    Column,
    CreateDateColumn,
    ObjectIdColumn,
    ObjectID,
  } from 'typeorm';
  import { ApiProperty } from '@nestjs/swagger';
  
  @Entity('statistics')
  export default class StatisticRecordEntity {
    @ApiProperty({ type: String })
    @ObjectIdColumn()
    readonly id: ObjectID;
  
    @ApiProperty({ type: String })
    @Column()
    readonly cityName: string = 'string';
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    readonly createdAt: Date;
  }
  