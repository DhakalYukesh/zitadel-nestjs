import { Injectable } from "@nestjs/common";
import { ZitadelAuthAdapter } from "./zitadel-auth-adapter.js";

@Injectable()
export class AuthService {
  constructor(private readonly zitadelAuthAdapter: ZitadelAuthAdapter) {}

  async login(username: string, password: string, orgId: string) {
    return this.zitadelAuthAdapter.login(username, password, orgId);
  }

  async getBrandingSettings(orgId: string) {
    return this.zitadelAuthAdapter.getBrandingSettings(orgId);
  }
}