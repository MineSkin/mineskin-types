import { SubscriptionStatus } from "./SubscriptionStatus";
export interface SimpleSubscription {
    product_id: string | number;
    status: SubscriptionStatus;
    next_payment_date: string;
    ends_at: string;
    created_at: string;
    product_name: string;
    variant_name: string;
    card_brand: string;
    user_email: string;
    renews_at: string;
    variant_id: string | number;
    subscription_id: string | number;
    subscription_quantity: number;
    subscription_price_id: string | number;
    subscription_item_id: string | number;
    is_usage_based: boolean;
    test_mode: boolean;
}
