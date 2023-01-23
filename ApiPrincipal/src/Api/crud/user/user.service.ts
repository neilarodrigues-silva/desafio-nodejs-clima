import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {

    async create(createUserDto: CreateUserDto) {

        const init = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(createUserDto)
        }

        return await fetch(`${process.env.API_CRUD_ENDPOINT}/users`, init)
        .then((response) => response.json())
      }

    async findAll(): Promise<any[]> {
        return await fetch(`${process.env.API_CRUD_ENDPOINT}/users`)
        .then((response) => response.json())
    }

    async findOne(id: any): Promise<any> {
        return await fetch(`${process.env.API_CRUD_ENDPOINT}/users/${id}`)
        .then((response) => response.json())
    }

    async findEmailOrFail(email: string): Promise<any> {
        return await fetch(`${process.env.API_CRUD_ENDPOINT}/users/login/${email}`)
        .then((response) => response.json())
    }

    async update(id: any, newValue): Promise<any | null> {
        const init = {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newValue)
        }

        return await fetch(`${process.env.API_CRUD_ENDPOINT}/users/${id}`, init)
        .then((response) => response.json())     
    }

    async updateToPremium(id: any): Promise<any | null> {
        const init = {
            method: 'PATCH'
        }

        return await fetch(`${process.env.API_CRUD_ENDPOINT}/users/premium/${id}`, init)
        .then((response) => response.json())
    }

    async updateToFree(id: any): Promise<any | null> {
        const init = {
            method: 'PATCH'
        }

        return await fetch(`${process.env.API_CRUD_ENDPOINT}/users/free/${id}`, init)
        .then((response) => response.json())
    }

    async remove(id: string): Promise<void> {

        const init = {
            method: 'DELETE',
        }

        return await fetch(`${process.env.API_CRUD_ENDPOINT}/users/${id}`, init)
        .then((response) => response.json())
    }
}