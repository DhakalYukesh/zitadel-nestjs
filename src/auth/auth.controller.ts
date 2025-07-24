import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service.js";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("login")
  async login(
    @Body() body: { username: string; password: string; orgId: string }
  ) {
    return this.authService.login(body.username, body.password, body.orgId);
  }

  @Post("branding")
  async branding(@Body() body: { orgId: string }) {
    return await this.authService.getBrandingSettings(body.orgId);
  }
}