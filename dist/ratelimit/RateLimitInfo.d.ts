import { NextRequest } from "./NextRequest";
import { DelayInfo } from "./DelayInfo";
import { LimitInfo } from "./LimitInfo";
export interface RateLimitInfo {
    next: NextRequest;
    delay: DelayInfo;
    limit: LimitInfo;
}
