import { DataSource } from 'typeorm';
import { AdminEntity } from './admin.entity';

export const AdminProviders = [
    {
        provide: 'ADMIN_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(AdminEntity),
        inject: ['DATA_SOURCE'],
    },
];