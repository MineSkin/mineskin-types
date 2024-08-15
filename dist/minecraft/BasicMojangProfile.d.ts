import { MojangProfileSkin } from "./MojangProfileSkin";
import { MojangProfileCape } from "./MojangProfileCape";
export interface BasicMojangProfile {
    id: string;
    name: string;
    skins?: MojangProfileSkin[];
    capes?: MojangProfileCape[];
}
