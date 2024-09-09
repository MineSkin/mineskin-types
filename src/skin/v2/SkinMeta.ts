import { SkinVariant } from "../SkinVariant";
import { SkinVisibility2 } from "./SkinVisibility2";

export interface SkinMeta {
    /** Custom name given by the user **/
    name?: string;
    /** Model of the skin **/
    variant: SkinVariant;
    /** Selected visibility **/
    visibility: SkinVisibility2;
}