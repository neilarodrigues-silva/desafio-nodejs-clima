import { IsNotEmpty } from 'class-validator';

export class UpdateFavoriteDto {
    @IsNotEmpty({ message: 'City cannot be empty.'})
    city: string;

    @IsNotEmpty({ message: 'State cannot be empty.'})
    state: string;
}
