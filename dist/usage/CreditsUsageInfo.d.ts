import { CreditType } from "../billing";
export interface CreditsUsageInfo {
    type: CreditType;
    used: number;
    remaining: number;
}
