import { CreditType } from "../billing";
export interface CreditsUsageInfo {
    id: string;
    type: CreditType;
    used: number;
    remaining: number;
}
