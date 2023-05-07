import { IReference } from "./index";

export interface IUpdateWebhookPayload {
    webhookUrl: string
}

export interface IBuyDataPayload {
    mobile_number: string;
    reference?:     string;
    plan:          string;
    network:       number;
    ported_number: boolean;
}