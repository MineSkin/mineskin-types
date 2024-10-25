import { MeteredUsageInfo } from "./MeteredUsageInfo";
import { CreditsUsageInfo } from "./CreditsUsageInfo";
import { RateUsageInfo } from "./RateUsageInfo";
export interface UsageInfo {
    credits?: CreditsUsageInfo;
    metered?: MeteredUsageInfo;
    rate?: RateUsageInfo;
}
