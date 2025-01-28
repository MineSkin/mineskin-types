import { SkinVariant, SkinVisibility2 } from "../skin";
import { UUID } from "../misc";

export interface GenerateOptions {
    name?: string;
    variant: SkinVariant;
    visibility: SkinVisibility2;
    cape?: UUID;
}
