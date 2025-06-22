export enum SubscriptionStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    PAUSED = "paused",
    PENDING = "pending",
    CANCELLED = "cancelled",
    EXPIRED = "expired",
    UNPAID = "unpaid",
}

export function validSubscriptionStatus(status: SubscriptionStatus): boolean {
    return status !== SubscriptionStatus.INACTIVE &&
        status !== SubscriptionStatus.EXPIRED &&
        status !== SubscriptionStatus.UNPAID;
}
