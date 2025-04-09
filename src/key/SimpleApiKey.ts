import { SimpleApiKeySubscription } from "./SimpleApiKeySubscription";
import { ApiKeyGrants } from "./ApiKeyGrants";

export interface SimpleApiKey {
    id: string;
    shortId: string;
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
    grants?: ApiKeyGrants;
}


