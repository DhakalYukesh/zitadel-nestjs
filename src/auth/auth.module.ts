import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { ZitadelAuthAdapter } from "./zitadel-auth-adapter.js";

@Module({
    controllers: [AuthController],
    providers: [AuthService, ZitadelAuthAdapter],
    exports: [AuthService],
})
export class AuthModule { }
