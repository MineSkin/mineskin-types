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
    sendEmails?: boolean;
    submitted?: true;
}
