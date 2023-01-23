import { Module } from "@nestjs/common";
import { FavoriteModule } from "../favorite/favorite.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [FavoriteModule],
    controllers: [UserController],
    providers: [
        UserService
    ],
    exports: [UserService]
})
export class UserModule {}