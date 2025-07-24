export interface AuthProvider {
    getBrandingSettings(orgId: string): Promise<any>;
}