import { SimpleApiKeySubscription } from "./SimpleApiKeySubscription";
import { ApiKeyGrants } from "./ApiKeyGrants";

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
    subscription?: SimpleApiKeySubscription;
    grants?: ApiKeyGrants;
}


