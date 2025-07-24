import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service.js";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("branding")
  async branding(@Body() body: { orgId: string }) {
    return await this.authService.getBrandingSettings(body.orgId);
  }
}