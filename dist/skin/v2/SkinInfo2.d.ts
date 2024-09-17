import { SkinTexture2 } from "./SkinTexture2";
import { GeneratorInfo } from "./GeneratorInfo";
import { SkinVariant } from "../SkinVariant";
import { UUID } from "../../misc";
import { SkinVisibility2 } from "./SkinVisibility2";
export interface SkinInfo2 {
    uuid: UUID;
    name?: string;
    variant: SkinVariant;
    visibility: SkinVisibility2;
    texture: SkinTexture2;
    generator: GeneratorInfo;
    views: number;
    duplicate: boolean;
}
