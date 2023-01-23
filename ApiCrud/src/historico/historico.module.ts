import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { HistoricoController } from "./historico.controller";
import { HistoricoProviders } from "./historico.providers";
import { HistoricoService } from "./historico.service";

@Module({
    imports: [DatabaseModule],
    controllers: [HistoricoController],
    providers: [
        ...HistoricoProviders,
        HistoricoService,
    ],
    exports: [HistoricoService]
})
export class HistoricoModule {}