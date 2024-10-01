import { SimpleApiKeySubscription } from "./SimpleApiKeySubscription";

export interface SimpleApiKey {
    id: string;
    name: string;
    user?: string;
    createdAt: Date;
    updatedAt?: Date;
    lastUsed?: Date;
    minDelay?: number;
    allowedOrigins?: string[];
    allowedIps?: string[];
    allowedAgents?: string[];
    useCredits?: boolean;
    subscription?: SimpleApiKeySubscription;
}


