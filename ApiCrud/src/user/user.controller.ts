import {
  Body,
  Controller,
  Delete,
  Get,
  Head,
  HttpStatus,
  Options,
  Param,
  Patch,
  Post,
  Put
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() createUserDTO: CreateUserDto) {
    return this.userService.create(createUserDTO);
  }

  @Get('/login/:email')
  async findByEmail(@Param('email') email: string) {
    return await this.userService.findEmailOrFail(email)
  }

  @Get()
  async listUser() {
    return await this.userService.findAll();
  }

  @Head()
  async findOne(@Param('id:') id){
    return await this.userService.findOne(id);
  }

  @Get('/:id')
  async searchUser(@Param('id') id) {
    const userSearch = await this.userService.findOne(id);
    return { user: userSearch };
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const userSearch = await this.userService.update(+id, updateUserDto);
    return { user: userSearch };
  }

  @Patch(':id')
  updatePartial(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Patch('/premium/:id')
  updatePremium(@Param('id') id: any) {
    const newValue = {
      roles: "premium"
    }
    return this.userService.update(+id, newValue);
  }

  @Patch('/free/:id')
  updateFree(@Param('id') id: any) {
    const newValue = {
      roles: "user"
    }
    return this.userService.update(+id, newValue);
  }

//@Head()
  //findAllHead() {
   // return this.userService.findAll();
 // }

  @Options()
  findAllOptions() {
    return new HttpException(
      {
        status: HttpStatus.NOT_IMPLEMENTED,
        error:
          'The server does not have the functionality required to fulfill the request.',
      },
      HttpStatus.NOT_IMPLEMENTED,
      {},
    );
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    await this.userService.remove(id);
    return {
      mensagem: 'sucess delete user',
    };
  }
}
