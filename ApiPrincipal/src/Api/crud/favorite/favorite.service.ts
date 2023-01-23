import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class FavoriteService {

    async create(createFavoriteDto: CreateFavoriteDto, id: any) {
        const init = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(createFavoriteDto)
        }

        return await fetch(`${process.env.API_CRUD_ENDPOINT}/favorite/${id}`, init)
        .then((response) => response.json())
    }

    async remove(id: number) {
        const init = {
            method: 'DELETE'
        }

        return await fetch(`${process.env.API_CRUD_ENDPOINT}/favorite/${id}`, init)
        .then((response) => response.json())
    }
}
