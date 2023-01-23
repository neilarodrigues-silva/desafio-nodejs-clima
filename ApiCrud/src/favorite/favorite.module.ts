import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { FavoriteProviders } from './favorite.providers';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[DatabaseModule, UserModule],
  controllers: [FavoriteController],
  providers: [
    ...FavoriteProviders,
    FavoriteService
  ]
})
export class FavoriteModule {}
