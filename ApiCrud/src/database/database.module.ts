import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { databaseProviders } from './database.providers';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}