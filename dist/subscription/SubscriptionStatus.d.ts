export declare enum SubscriptionStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    PAUSED = "paused",
    PENDING = "pending",
    CANCELLED = "cancelled",
    EXPIRED = "expired",
    UNPAID = "unpaid"
}
export declare function validSubscriptionStatus(status: SubscriptionStatus): boolean;
