import { Injectable } from '@nestjs/common';
import { AdminService } from '../../admin.service';
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ValidationArguments } from "class-validator/types/validation/ValidationArguments";


@Injectable()
@ValidatorConstraint({name:'EmailAdminIsUnique', async: true})
export class EmailAdminIsUnique implements ValidatorConstraintInterface {

    constructor(private readonly adminService: AdminService) {}
    
    async validate(value: any) {
        console.log('Valor: ' + value);
        
        const adminWithExistingEmail = await this.adminService.emailAlreadyExists(value);
        return !adminWithExistingEmail;
    }

    defaultMessage(args: ValidationArguments) {
        return `There is already an admin with this email`;
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
    