import { SkinTextureUrls } from "./SkinTextureUrls";
import { ProfileProperty } from "../profile";
export interface SkinTexture extends Omit<ProfileProperty, "name"> {
    urls: SkinTextureUrls;
    /**@deprecated**/
    url: string;
}
