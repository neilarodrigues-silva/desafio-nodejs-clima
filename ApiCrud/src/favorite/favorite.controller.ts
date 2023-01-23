import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { UserService } from 'src/user/user.service';

@Controller('/favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService, private userService: UserService) {}

  @Post('/:id')
  async create(@Param('id') id: string, @Body() createFavoriteDto: CreateFavoriteDto) {
    const user = await this.userService.findOne(id)
    createFavoriteDto.user = user
    return this.favoriteService.create(createFavoriteDto);
  }

  @Get()
  findAll() {
    return this.favoriteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoriteService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto) {
    return this.favoriteService.update(+id, updateFavoriteDto);
  }

  @Patch(':id')
  updatePartial(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto) {
    return this.favoriteService.update(+id, updateFavoriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteService.remove(+id);
  }
}
