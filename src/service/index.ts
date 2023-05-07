import { IPagination } from "../interface/index";
import {
    IBuyDataPayload,
    IUpdateWebhookPayload
} from "../interface/payload";
import {
    IBuyDataResponse,
    IErrorResponse,
    IGetAllTransactionsResponse,
    IGetDataPlansResponse,
    IUpdateWebhookResponse,
    IUserDetailsResponse,
} from "../interface/response";
import { Fetcher, ROUTES } from "../utils/constants";

export class SwipeSdk {
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async getUserDetails(): Promise<IUserDetailsResponse | IErrorResponse> {
        try {
            const res = await Fetcher({
                apiKey: this.apiKey,
                method: ROUTES.user.details.method,
                url: ROUTES.user.details.url
            })
            const response: IUserDetailsResponse = await res.json();
            return response;
        } catch (error: any) {
            throw error as IErrorResponse
        }
    }

    async updateWebhookUrl(params: IUpdateWebhookPayload): Promise<IUpdateWebhookResponse | IErrorResponse> {
        try {
            const res = await Fetcher({
                apiKey: this.apiKey,
                method: ROUTES.user.webhook.method,
                url: ROUTES.user.webhook.url,
                body: params
            })
            const response: IUpdateWebhookResponse = await res.json();
            return response;
        } catch (error: any) {
            throw error as IErrorResponse
        }
    }

    async getDataPlans(): Promise<IGetDataPlansResponse | IErrorResponse> {
        try {
            const res = await Fetcher({
                apiKey: this.apiKey,
                method: ROUTES.data_plans.get.method,
                url: ROUTES.data_plans.get.url,
            })
            const response: IGetDataPlansResponse = await res.json();
            return response;
        } catch (error: any) {
            throw error as IErrorResponse
        }
    }

    async buyDataPlan(params: IBuyDataPayload): Promise<IBuyDataResponse | IErrorResponse> {
        try {
            const res = await Fetcher({
                apiKey: this.apiKey,
                method: ROUTES.data_plans.buy.method,
                url: ROUTES.data_plans.buy.url,
                body: params
            })
            const response: IBuyDataResponse = await res.json();
            return response;
        } catch (error: any) {
            throw error as IErrorResponse
        }
    }

    async getAllDataTransactions(pagination: IPagination): Promise<IGetAllTransactionsResponse | IErrorResponse> {
        try {
            const res = await Fetcher({
                apiKey: this.apiKey,
                method: ROUTES.transaction.all.method,
                url: ROUTES.transaction.all.url,
                pagination
            })
            const response: IGetAllTransactionsResponse = await res.json();
            return response;
        } catch (error: any) {
            throw error as IErrorResponse
        }
    }

    async getDataTransactionByReference(reference: string): Promise<IUpdateWebhookResponse | IErrorResponse> {
        try {
            const res = await Fetcher({
                apiKey: this.apiKey,
                method: ROUTES.transaction.reference.method,
                url: ROUTES.transaction.reference.url(reference),
            })
            const response: IUpdateWebhookResponse = await res.json();
            return response;
        } catch (error: any) {
            throw error as IErrorResponse
        }
    }

}