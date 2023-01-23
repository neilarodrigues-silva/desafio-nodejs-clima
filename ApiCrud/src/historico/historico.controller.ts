import {
  Body,
  Controller, Get, Post
} from '@nestjs/common';
import { HistoryDTO } from './dto/create.historico.dto';
import { HistoricoService } from './historico.service';

@Controller('/historico')
export class HistoricoController {
  constructor(private historicoService: HistoricoService) {}

  @Post()
  createHistory(@Body() historicoDTO: HistoryDTO) {
    return this.historicoService.create(historicoDTO);
  }


  @Get()
  async listHistory() {
    return await this.historicoService.findAll();
  }
}
