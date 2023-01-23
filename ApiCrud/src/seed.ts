import { UserFactory } from './factory/user.factory';
import { UserEntity } from './user/user.entity';

import { MainSeeder } from './seeder/main.seeder';
import { AdminFactory } from './factory/admin.factory';
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import { AdminEntity } from './admin/admin.entity';

const {
  DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE,
} = process.env;

const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: DB_HOST || "localhost",
  port: Number(DB_PORT) || 3306,
  username: DB_USERNAME || 'root',
  password: DB_PASSWORD || 'root',
  database: DB_DATABASE || 'desafio-node',
  entities: [AdminEntity, UserEntity],
  // additional config options brought by typeorm-extension
  factories: [AdminFactory, UserFactory],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
  await dataSource.synchronize(false);
  await runSeeders(dataSource);
  process.exit();
});