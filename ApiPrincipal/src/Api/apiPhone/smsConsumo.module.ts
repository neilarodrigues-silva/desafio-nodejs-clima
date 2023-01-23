import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SmsConsumoService } from "./smsConsumo.service";

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [],
    providers: [SmsConsumoService],
    exports: [SmsConsumoService]
})
export class SmsConsumoModule {}