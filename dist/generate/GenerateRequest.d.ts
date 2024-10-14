import { GenerateType } from "./GenerateType";
import { ClientInfo } from "../skin";
import { GenerateOptions } from "./GenerateOptions";
import { Breadcrumb } from "../misc";
export interface GenerateRequest {
    image: string;
    type: GenerateType;
    clientInfo: ClientInfo;
    client?: any;
    options: GenerateOptions;
    breadcrumb?: Breadcrumb;
}
