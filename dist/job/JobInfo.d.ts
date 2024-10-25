import { JobStatus } from "./JobStatus";
export interface JobInfo {
    id: string;
    status: JobStatus;
    timestamp: number;
    result?: string;
}
