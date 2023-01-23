import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HistoryDTO } from './dto/create.historico.dto';
import { HistoricoEntity } from './historico.entity';

@Injectable()
export class HistoricoService {
    constructor(
        @Inject('HISTORICO_REPOSITORY')
        private historicoRepository: Repository<HistoricoEntity>,
    ) { }

    async create(historicoDTO: HistoryDTO) {
        return this.historicoRepository.save(historicoDTO);
      }

    async findAll(): Promise<HistoricoEntity[]> {
        return await this.historicoRepository.find();
    }
}