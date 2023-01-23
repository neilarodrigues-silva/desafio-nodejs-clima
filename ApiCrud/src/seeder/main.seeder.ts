import { UserEntity } from './../user/user.entity';
import { AdminEntity } from './../admin/admin.entity';

import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";


export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {

    const adminRepository = dataSource.getRepository(AdminEntity);
    /*
    await adminRepository.insert([
        {
            name: 'Caleb',                
            email: 'caleb.barrows@gmail.com',
            password: '123456'
        },
        {
            name: 'Neila',                
            email: 'neila@gmail.com',
            password: '123456'
        }
    ]);
    */
    const adminFactory = await factoryManager.get(AdminEntity);
    await adminFactory.saveMany(5);

    const userFactory = factoryManager.get(UserEntity);   
    const users = await userFactory.saveMany(5);

    
  }
}