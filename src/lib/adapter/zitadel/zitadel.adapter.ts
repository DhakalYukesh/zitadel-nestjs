import { createServerTransport } from "@zitadel/client/node";
import { createSettingsServiceClient, makeReqCtx } from "@zitadel/client/v2";

export class ZitadelAdapter {
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

    // TODO: change the any return type
    // async login(loginName: string, orgId: string): Promise<any> {
    //     // Step 1: Fetch the login settings
    //     const loginSettings = await this.settingsService.getLoginSettings({
    //         ctx: makeReqCtx(orgId),
    //     }, {})
    //     if (!loginSettings) {
    //         return { error: "Could not get login settings" };
    //     }

    //     // Step 2: Search for the user
    //     const searchUserResp = await this.searchUsers({
    //         loginName,
    //         orgId,
    //         loginSettings
    //     })
    //     if (!searchUserResp || !searchUserResp.result || !searchUserResp.result.length) {
    //         return { error: "User not found" };
    //     }

    //     // Step 3: Ensure only one user matched
    //     if (searchUserResp.result.length > 1) {
    //         return { error: "More than one user found. Provide a unique identifier" };
    //     }
    //     const user = searchUserResp.result[0];

    //     // Step 4: Basic eligibility checks
    //     if (user.state === "INITIAL") {
    //         return { error: "Initial User not supported" };
    //     }
    //     if (!loginSettings.allowUsernamePassword) {
    //         return { error: "Username/password login not allowed!" };
    //     }

    //     // Step 5: Request for tokens
    //     const tokenResponse = await tokenRequest({
            
    //     })

    // }

    // async searchUsers({ loginName: string, orgId: string, loginSettings: string }) {

    // }

    // TODO: change the any return type
    async getBrandingSettings(orgId: string): Promise<any> {
        const brandingSettingsResp = await this.settingsService.getBrandingSettings({
            ctx: makeReqCtx(orgId),
        }, {})

        return brandingSettingsResp.settings ? brandingSettingsResp.settings : undefined;
    }
}