import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config/dist";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/Api/crud/user/user.module";
import { AdminModule } from "../Api/crud/admin/admin.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";

@Module({
    imports: [
        ConfigModule.forRoot(),
        AdminModule,
        UserModule,
        PassportModule, 
        JwtModule.register({
        privateKey: process.env.JWT_KEY,
        signOptions: { expiresIn: '900s' },
    })],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}