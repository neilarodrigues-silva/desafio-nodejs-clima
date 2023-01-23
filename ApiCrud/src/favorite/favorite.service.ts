import { Favorite } from './entities/favorite.entity';
import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class FavoriteService {
    constructor(
        @Inject('FAVORITE_REPOSITORY')
        private favoriteRepository: Repository<Favorite>
    ) {}

    async create(createFavoriteDto: CreateFavoriteDto) { 
        return this.favoriteRepository.save(createFavoriteDto);
    }

    async findAll() {
        const admin = await this.favoriteRepository.find();
        return admin;
    }

    async findOne(id: number) {
        return await this.favoriteRepository.findOneBy({ id });
    }

    async update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
        await this.favoriteRepository.update(id, updateFavoriteDto);
        return await this.findOne(id);
    }

    async remove(id: number) {
        await this.favoriteRepository.delete(id);
        return {response: "sucessfull favorite delete"}
    }
}
