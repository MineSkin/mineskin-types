export interface SimpleApiKeySubscription {
    id: string;
    products: string[];
    features: string[];
    meta: Record<string, string | number | boolean>;
    status: string;
}
