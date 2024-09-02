import { SkinIdAndTexture } from "./SkinIdAndTexture";
import { SkinVariant } from "./SkinVariant";
import { DelayInfo } from "../generate";

export interface SkinInfo {
    id: number;
    idStr: string;
    uuid: string;
    hash: string;
    name: string;
    /**@deprecated**/
    model: string;
    variant: SkinVariant;
    data: SkinIdAndTexture;
    timestamp: number;
    duration: number;
    /**@deprecated**/
    accountId: number;
    account: number;
    server: string;
    private: boolean;
    views: number;
    duplicate?: boolean;
    /**@deprecated**/
    nextRequest?: number;
    delayInfo?: DelayInfo;
}
