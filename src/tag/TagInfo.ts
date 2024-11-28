import { TagVoteType } from "./TagVoteType";

export interface TagInfo {
    tag: string;
    vote?: TagVoteType;
    suggested?: boolean;
}