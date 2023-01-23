import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminService } from "src/Api/crud/admin/admin.service";
import { UserService } from "src/Api/crud/user/user.service";

@Injectable()
export class AuthService {
    constructor(private adminService: AdminService,private userService: UserService, private jwtService: JwtService) {}

    async login(user) {
        const payload = { sub: user.id, email: user.email, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    async validateUser(email: string, password: string) {
        let user: any
        try {
            try {
                user = await this.userService.findEmailOrFail(email)
            } catch (error) {
                user = await this.adminService.findEmailOrFail(email)
            }
        } catch (error) {
            user = null
        }        

        if (user == null) return null
        const isPasswordValid = password == user.password ? true : false
        if (!isPasswordValid) return null;

        return user
    }
}