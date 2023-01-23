import { Injectable } from "@nestjs/common";
import { Telegraf } from "telegraf";


@Injectable()
export class SmsConsumoService {

    async sendMessage(mensagem: string) {

        const bot = new Telegraf(process.env.API_TELEGRAM_KEY)

        bot.telegram.sendMessage(1445326863, mensagem)

    }

}