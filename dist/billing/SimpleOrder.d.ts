export interface SimpleOrder {
    product_id: string | number;
    order_number: number;
    status: string;
    created_at: string;
    product_name: string;
    variant_name: string;
    variant_id: string | number;
    total: number;
}
