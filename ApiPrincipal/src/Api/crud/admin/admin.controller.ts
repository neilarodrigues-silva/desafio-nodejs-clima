import {
  Body,
  Controller, Delete, Get, Param, Post, Put, Req, UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/roles/role.enum';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { UpdateAdminDto } from './dto/updateAdmin.dto';

@Controller('/admin')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles(Role.Admin)
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post()
  async create(@Body() createAdminDto: CreateAdminDto) {
    return await this.adminService.create(createAdminDto);
  }

  @Get()
  async listUser() {
    return await this.adminService.findAll();
  }

  @Get('/:id')
  async searchUser(@Param('id') id) {
    const userSearch = await this.adminService.findOne(id);
    return userSearch;
  }

  @Get('/login')
  async findByEmail(@Body() admin: any) {
      return await this.adminService.findEmailOrFail(admin.email)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    await this.adminService.remove(id);
    return {
      mensagem: 'sucess delete admin',
    };
  }
}
