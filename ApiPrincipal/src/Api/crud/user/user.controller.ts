import {
  Body,
  Controller, Delete, Get, Param, Post, Put, UseGuards
} from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/roles/role.enum';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/uptadeUser.dto';
import { UserService } from './user.service';


@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  //@Roles(Role.User)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Admin)
  @Get()
  async listUser() {
    return await this.userService.findAll();
  }

  //@Roles(Role.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('/:id')
  async searchUser(@Param('id') id) {
    const userSearch = await this.userService.findOne(id);

    if( userSearch == null) {
      return {message: 'user not exist'}
  }

    return userSearch;
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.User)
  @Put('/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {

    const response = await this.userService.update(+id, updateUserDto);

    if( response == null) {
      return {message: 'user not exist'}
  }

    return response
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Admin)
  @Patch('/premium/:id')
  updateToPremium(@Param('id') id: string) {
    return this.userService.updateToPremium(+id);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Admin)
  @Patch('/free/:id')
  updateToFree(@Param('id') id: string) {
    return this.userService.updateToFree(+id);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Admin)
  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    await this.userService.remove(id);
    return {
      mensagem: 'sucess delete user',
    };
  }
}
