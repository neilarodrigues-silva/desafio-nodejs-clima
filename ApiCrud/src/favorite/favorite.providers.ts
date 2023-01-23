import { Favorite } from './entities/favorite.entity';
import { DataSource } from 'typeorm';

export const FavoriteProviders = [
    {
        provide: 'FAVORITE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Favorite),
        inject: ['DATA_SOURCE'],
    },
];