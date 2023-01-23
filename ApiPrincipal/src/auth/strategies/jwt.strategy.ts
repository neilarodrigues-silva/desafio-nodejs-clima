import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'e7d80ffeefa212b7c5c55700e4f7193e'
        })
    }

    async validate(payload: any) {
        return { id: payload.sub, email: payload.email, roles: payload.roles }
    }
}