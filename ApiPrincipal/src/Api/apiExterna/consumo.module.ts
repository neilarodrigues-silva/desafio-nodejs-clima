import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SmsConsumoModule } from "../apiPhone/smsConsumo.module";
import { ConsumoController } from "./consumo.controller";
import { ConsumoService } from "./consumo.service";

@Module({
    imports: [ConfigModule.forRoot(), SmsConsumoModule],
    controllers: [ConsumoController],
    providers: [ConsumoService],
    exports: [ConsumoService]
})
export class ConsumoModule {}