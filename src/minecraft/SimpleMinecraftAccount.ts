import { AccountType } from "../account";

export interface SimpleMinecraftAccount {
    uuid: string;
    email: string;
    user: string;
    enabled: boolean;
    playername: string;
    accountType: AccountType;
    lastUsed: number;
    usable: boolean;
    successCount: number;
    totalSuccessRate: number;
    recentSuccessRate: number;
    successStreak: number;
    hasErrors: boolean;
    errorStreak: number;
    lastErrorCode: string;
    errorState: string;
    added: number;
    originalSkin?: string;
    originalCape?: string;

    /**@deprecated**/
    sendEmails?: boolean;
    settings?: Record<string, any>;

    submitted?: true;
}
