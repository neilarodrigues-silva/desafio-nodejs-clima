import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Role } from "src/auth/roles/role.enum";
import { Roles } from "src/auth/roles/roles.decorator";
import { RolesGuard } from "src/auth/roles/roles.guard";
import { SmsConsumoService } from "../apiPhone/smsConsumo.service";
import { ConsumoService } from "./consumo.service";

@Controller('/weather')
export class ConsumoController {
    constructor(private consumoService: ConsumoService, private smsConsumoService: SmsConsumoService) { }

    @Get('/:idUser')
    async weather(@Param('idUser') idUser) {
        return this.consumoService.responseWithAdress(idUser)
    }
    
    @Get('/city/:city')
    async weatherWithCity(@Param('city') city) {

        const response = await this.consumoService.responseWithCity(city)
        await this.smsConsumoService.sendMessage(`O clima em ${city} está: ${response.current.condition.text}`)
        return response
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.Admin)
    @Get('/history/consult')
    async history() {
        return this.consumoService.getHistory()
    }
}