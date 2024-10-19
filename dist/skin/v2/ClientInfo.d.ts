export interface ClientInfo {
    /** client request date millis **/
    time: number;
    /** client user agent **/
    agent: string;
    /** client origin **/
    origin?: string;
    /** client ip **/
    ip: string;
    /** client api key (ID) **/
    key?: string;
    /** client user **/
    user?: string;
    breadcrumb: string;
    grants?: Record<string, string | number | boolean>;
    billable?: boolean;
    /** metered billing **/
    metered?: boolean;
    /** whether to use up paid credits **/
    credits?: boolean;
    /** max concurrency **/
    concurrency?: number;
    /** queue priority **/
    priority?: number;
}
