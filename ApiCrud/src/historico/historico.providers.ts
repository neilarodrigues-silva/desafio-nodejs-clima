import { DataSource } from 'typeorm';
import { HistoricoEntity } from './historico.entity';

export const HistoricoProviders = [
    {
        provide: 'HISTORICO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(HistoricoEntity),
        inject: ['DATA_SOURCE'],
    },
];