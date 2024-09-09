import { SkinVariant } from "./SkinVariant";
import { UUID } from "../misc";
import { SkinVisibility } from "./SkinVisibility";
import { SkinTexture2 } from "./SkinTexture2";
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
