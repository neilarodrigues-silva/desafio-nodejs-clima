
import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { FavoriteModule } from './favorite/favorite.module';
import { HistoricoModule } from './historico/historico.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, AdminModule, FavoriteModule, HistoricoModule]
})
export class AppModule { }
