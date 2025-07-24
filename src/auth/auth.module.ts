import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { ZitadelAdapter } from "@/lib/adapter/zitadel/zitadel.adapter.js";

@Module({
    controllers: [AuthController],
    providers: [AuthService, ZitadelAdapter],
    exports: [AuthService],
})
export class AuthModule { }
