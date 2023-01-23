import { Injectable, NotFoundException } from "@nestjs/common";
import { SmsConsumoService } from "../apiPhone/smsConsumo.service";

@Injectable()
export class ConsumoService {
    constructor(private smsConsumoService: SmsConsumoService) { }

    async history(city: string) {
        const init = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ search: city })
        }

        await fetch(`${process.env.API_CRUD_ENDPOINT}/historico`, init)
            .then((response) => response.json())
    }

    async getHistory() {
        return await fetch(`${process.env.API_CRUD_ENDPOINT}/historico`)
            .then((response) => response.json())
    }

    async responseForUserPremium(city: string) {

        await this.history(city)

        const resposta = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}=${city}&lang=pt`)
            .then((response) => response.json());

        await this.smsConsumoService.sendMessage(`O clima em ${city} está: ${resposta.current.condition.text}`)

        return resposta
    }

    async responseForUserFree(city: string) {

        await this.history(city)

        const resposta = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}=${city}&lang=pt`)
            .then((response) => response.json());

        await this.smsConsumoService.sendMessage(`O clima em ${city} está: ${resposta.current.condition.text}`)

        return {
            location: {
                city: resposta.location.name,
                state: resposta.location.region,
                country: resposta.location.country,
            },
            Current: {
                temperature: resposta.current.temp_c,
                condition: resposta.current.condition,
            }
        }
    }

    async responseWithAdress(id: any): Promise<any> {

        const response = await fetch(`${process.env.API_CRUD_ENDPOINT}/users/${id}`)
            .then((response) => response.json())

        if (response.user == null) {
            return new NotFoundException("user not exist")
        }

        if (response.user.roles == "premium") {
            return this.responseForUserPremium(response.user.city)
        }

        return this.responseForUserFree(response.user.city)
    }

    async responseWithCity(city: any): Promise<any> {

        await this.history(city)

        const resposta = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}=${city}&lang=pt`)
            .then((response) => response.json())

        return resposta
    }
}