import { Body, Controller, Delete, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/roles/role.enum';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { FavoriteService } from './favorite.service';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller()
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Roles(Role.Premium)
  @Post('users/:id/favorites')
  async addFavorite(@Param('id') idUser: string, @Body() createFavoriteDto: CreateFavoriteDto) {
    return await this.favoriteService.create(createFavoriteDto, idUser);
  }

  @Roles(Role.Premium)
  @Delete('users/favorites/:id')
  removeFavorite(@Param('id') id: string) {
    return this.favoriteService.remove(+id);
  }
}
