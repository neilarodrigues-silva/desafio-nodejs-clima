import { Body, Controller, Delete, Get, Param, Post, Put, Patch, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { Options } from '@nestjs/common/decorators';
import { response } from 'express';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create.admin.dto';
import { UpdateAdminDto } from './dto/update.admin.dto';


@Controller('/admin')
export class AdminController {

    constructor(private readonly adminService: AdminService) { }

    @Post()
    createAdmin(@Body() createAdminDTO: CreateAdminDto) {
       try {
            return this.adminService.saveAdmin(createAdminDTO);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'There was an unexpected error!',
              }, HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error
              });
        }
    }

    @Get('/login/:email')
    async findByEmail(@Param('email') email: string) {
        return await this.adminService.findEmailOrFail(email)
    }
    
    @Get()
    async findAll() {
        return this.adminService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {

        const response = await this.adminService.findOne(+id);

        if( response == null) {
            return {message: 'user not exist'}
        }

        return response
    }

     @Patch(':id')
    updatePartial(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
         return this.adminService.update(+id, updateAdminDto);
     }

     @Put(':id')
     async update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
        const response = await this.adminService.update(+id, updateAdminDto);
        
        if( response == null) {
            return {message: 'user not exist'}
        }

        return response
    }


    @Options()
    findAllOptions() {
    return new HttpException({
        status: HttpStatus.NOT_IMPLEMENTED,
        error: 'The server does not have the functionality required to fulfill the request.',
     },
       HttpStatus.NOT_IMPLEMENTED, {});
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        this.adminService.remove(id);
        return {
            mensagem: 'sucess delete admin',
          }
    }
}




