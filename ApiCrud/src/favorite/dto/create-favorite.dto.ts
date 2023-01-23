import { IsNotEmpty } from 'class-validator';

export class CreateFavoriteDto {

    @IsNotEmpty({ message: 'City cannot be empty.'})
    city: string;

    @IsNotEmpty({ message: 'State cannot be empty.'})
    state: string;

    user: any;
}
