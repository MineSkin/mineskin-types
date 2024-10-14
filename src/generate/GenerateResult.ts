import { UUID } from "../misc";
import { DuplicateSource } from "./DuplicateSource";
import { UsageInfo } from "../usage";

export interface GenerateResult {
    skin: UUID;
    duplicate?: DuplicateSource;
    usage?: UsageInfo;
}
