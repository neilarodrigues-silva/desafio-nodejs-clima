import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto{

    @IsNotEmpty({ message: 'Name cannot be empty.'})
    name: string;

    @IsEmail(undefined, { message: 'The email entered is invalid.'})
    email: string;

    @MinLength(6, { message: 'Password must be at least 6 characters long.'})
    password: string;

    @IsNotEmpty({ message: 'City field cannot be empty.'})
    city: string;

    @IsNotEmpty({ message: 'State field cannot be empty.'})
    state: string;

}