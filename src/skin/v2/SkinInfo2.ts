import { SkinTexture2 } from "./SkinTexture2";
import { SkinHashes } from "./SkinHashes";
import { SkinUrls } from "./SkinUrls";
import { GeneratorInfo } from "./GeneratorInfo";
import { SkinVisibility } from "../SkinVisibility";
import { SkinVariant } from "../SkinVariant";
import { UUID } from "../../misc";

export interface SkinInfo2 {
    uuid: UUID;
    name: string;
    variant: SkinVariant;
    visibility: SkinVisibility;
    texture: SkinTexture2;
    generator: GeneratorInfo;
    views: number;
    duplicate: boolean;
}
