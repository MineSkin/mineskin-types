import { SkinIdAndTexture } from "./SkinIdAndTexture";
import { SkinVariant } from "./SkinVariant";
import { DelayInfo } from "../generate";
import { UUID } from "../misc";
import { SkinVisibility } from "./SkinVisibility";
import { SkinTexture } from "./SkinTexture";
import { SkinTexture2 } from "./SkinTexture2";
import { SkinHashes } from "./SkinHashes";
import { SkinUrls } from "./SkinUrls";
import { GeneratorInfo } from "./GeneratorInfo";

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
