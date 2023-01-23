import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/createAdmin.dto';

@Injectable()
export class AdminService {

    async create(createAdminDto: CreateAdminDto) {

        const init = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(createAdminDto)
        }

        return await fetch(`${process.env.API_CRUD_ENDPOINT}/admin`, init)
        .then((response) => response.json())
      }

    async findAll(): Promise<any[]> {
        return await fetch(`${process.env.API_CRUD_ENDPOINT}/admin`)
        .then((response) => response.json())
    }

    async findOne(id: any): Promise<any> {
        return await fetch(`${process.env.API_CRUD_ENDPOINT}/admin/${id}`)
        .then((response) => response.json())
    }

    async findEmailOrFail(email: string): Promise<any> {
        return await fetch(`${process.env.API_CRUD_ENDPOINT}/admin/login/${email}`)
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

        return await fetch(`${process.env.API_CRUD_ENDPOINT}/admin/${id}`, init)
        .then((response) => response.json())
    }

    async remove(id: string): Promise<void> {

        const init = {
            method: 'DELETE',
        }

        return await fetch(`${process.env.API_CRUD_ENDPOINT}/admin/${id}`, init)
        .then((response) => response.json())
    }
}