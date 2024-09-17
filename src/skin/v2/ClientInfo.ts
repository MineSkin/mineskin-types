export interface ClientInfo {
    /** client request date **/
    date: Date;
    /** client user agent **/
    agent: string;
    /** client ip **/
    ip: string;
    /** client api key **/
    key?: string;
    /** client user **/
    user?: string;
    billable?: boolean;
}