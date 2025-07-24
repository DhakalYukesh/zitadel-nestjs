import { createSettingsServiceClient, makeReqCtx } from '@zitadel/client/v2';
import { AuthProvider } from './auth-provider.interface.js';
import { createServerTransport } from '@zitadel/client/node';

export class ZitadelAuthAdapter implements AuthProvider {
    private readonly transport;
    private readonly settingsService;
    private readonly authService;

    constructor() {
        this.transport = createServerTransport(
            process.env.ZITADEL_SERVICE_USER_TOKEN!,
            { baseUrl: process.env.ZITADEL_BASE_URL! || 'https://api.zitadel.ch' }
        );

        console.log("Zitadel is working...");
        this.settingsService = createSettingsServiceClient(this.transport);
        this.authService = createSettingsServiceClient(this.transport);
    }

    async login(username: string, password: string, orgId: string): Promise<any> {
        return this.authService.getLoginSettings({
            ctx: makeReqCtx(orgId),
            username,
            password,
        }, {});
    }   

    async getBrandingSettings(orgId: string): Promise<any> {
        const resp = await this.settingsService.getBrandingSettings({
            ctx: makeReqCtx(orgId),
        }, {});

        return resp.settings ? resp.settings : undefined;
    }
}