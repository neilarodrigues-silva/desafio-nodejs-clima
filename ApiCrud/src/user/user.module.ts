import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { EmailUserIsUnique } from "./dto/validation/email.user.isunique";
import { UserController } from "./user.controller";
import { UserProviders } from "./user.providers";
import { UserService } from "./user.service";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [
        ...UserProviders,
        UserService,
        EmailUserIsUnique
    ],
    exports: [UserService]
})
export class UserModule {}