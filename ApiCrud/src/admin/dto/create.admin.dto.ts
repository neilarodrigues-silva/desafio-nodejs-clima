import { EmailAdminIsUnique } from './validation/email.admin.isunique';
import { IsEmail, IsNotEmpty, MinLength, Validate } from "class-validator";


export class CreateAdminDto{

    @IsNotEmpty({ message: 'Name cannot be empty.'})
    name: string;

    @IsEmail(undefined, { message: 'The email entered is invalid.'})
    @Validate(EmailAdminIsUnique)
    email: string;

    @MinLength(6, { message: 'Password must be at least 6 characters long.'})
    password: string;
}