export interface AuthProvider {
    login(username: string, password: string, orgId: string): Promise<any>;
    getBrandingSettings(orgId: string): Promise<any>;
}