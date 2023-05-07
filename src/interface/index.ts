export interface IReference {
    reference: string;
}

export interface IPagination {
    limit: number;
    offset: number;
}

export interface IFetcher {
    url: string;
    method: string;
    apiKey: string;
    body?: any;
    pagination?: IPagination
}