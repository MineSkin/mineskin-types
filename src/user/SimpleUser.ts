export interface SimpleUser {
    uuid: string;
    externalId?: string;
    externalProvider?: string;
    email: string;
    discordId?: string;
    created: Date;
    lastUsed: Date;
    skins: string[];
    minecraftAccounts: number;
}
