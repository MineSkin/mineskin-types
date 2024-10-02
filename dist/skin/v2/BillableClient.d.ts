import { ClientInfo } from "./ClientInfo";
import { CreditType } from "../../billing";
export interface BillableClient extends ClientInfo {
    billable?: boolean;
    metered?: boolean;
    credits?: CreditType | boolean;
}
export declare function isBillableClient(client: ClientInfo): client is BillableClient;
