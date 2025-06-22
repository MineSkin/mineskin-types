export interface SimpleReward {
    id: string;
    name: string;
    description?: string;
    type: string;
    value: number;
    category: string;
    source?: string;
    user: string;
    createdAt: Date;
    updatedAt: Date;
    expiresAt?: Date;
    redeemedAt?: Date;
}
export type AccountReward = SimpleReward & {
    account: string;
};
