import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConsumoModule } from './Api/apiExterna/consumo.module';
import { SmsConsumoModule } from './Api/apiPhone/smsConsumo.module';
import { AdminModule } from './Api/crud/admin/admin.module';
import { UserModule } from './Api/crud/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConsumoModule, 
    UserModule, 
    AdminModule, 
    AuthModule, 
    SmsConsumoModule
  ]
})
export class AppModule { }
