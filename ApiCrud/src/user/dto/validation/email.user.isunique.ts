import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "src/user/user.service";



@Injectable()
@ValidatorConstraint({name:'EmailUserIsUnique', async: true})
export class EmailUserIsUnique implements ValidatorConstraintInterface {

    constructor(private readonly userService: UserService) {}
    
    async validate(value: any) {
        console.log('Valor: ' + value);
        
        const userWithExistingEmail = await this.userService.emailAlreadyExists(value);
        return !userWithExistingEmail;
    }

    defaultMessage(args: ValidationArguments) {
        return `There is already an user with this email`;
    }
    
}


    export const EmailAdminIsUniqueValidator = (validationOfOptions: ValidationOptions) => {
        return (object: Object, properties: string) => {
            registerDecorator({
                target: object.constructor,
                propertyName: properties,
                options: validationOfOptions,
                constraints: [],
                validator: EmailAdminIsUniqueValidator
            })
        }
    }
    