import { Injectable } from "@nestjs/common";
import { ZitadelAdapter } from "@/lib/adapter/zitadel/zitadel.adapter.js";
import { AuthProvider } from "./auth-provider.interface.js";

@Injectable()
export class AuthService implements AuthProvider {
  constructor(private readonly zitadelAuthAdapter: ZitadelAdapter) {}

  async getBrandingSettings(orgId: string) {
    return this.zitadelAuthAdapter.getBrandingSettings(orgId);
  }
}