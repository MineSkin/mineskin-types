export interface NotificationLink {
    title: string;
    url: string;
}

export interface SimpleNotification {
    title: string;
    message: string;
    level: string;
    links?: NotificationLink[];
    user: string;
    delivery: string[];
    expiresAt?: Date;
}