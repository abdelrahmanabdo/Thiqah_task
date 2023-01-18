import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DatabaseConnection } from './constants/database-connection';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...DatabaseConnection,
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
