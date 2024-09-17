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
    billable?: boolean;
}