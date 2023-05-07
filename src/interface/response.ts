
export interface ISuccessResponse {
    status: string;
    message: string;
    data?: any;
}

export interface IErrorResponse {
    status: string;
    message: string;
}

export interface IUserDetailsResponse {
    status:  string;
    message: string;
    data:    IUserDtails;
}

export interface IUserDtails {
    uid:             string;
    fullname:        string;
    username:        string;
    email:           string;
    phone:           string;
    emailVerified:   boolean;
    role:            string;
    isBlocked:       boolean;
    referralId:      string;
    total_referrals: number;
    webhookUrl:      string;
    wallet:          Wallet1;
}

interface Wallet1 {
    uid:     string;
    email:   string;
    amount:  number;
    bonus:   number;
    account: Account;
}

interface Account {
    bankCode:      string;
    bankName:      string;
    accountNumber: string;
    accountName:   string;
    name:          string;
}

export interface IUpdateWebhookResponse {
    status:  string;
    message: string;
    data:    IWebhookUrl;
}

export interface IWebhookUrl {
    webhookUrl: string;
}

export interface IGetDataPlansResponse {
    status:  string;
    message: string;
    data:    IDataPlans[];
}

export interface IDataPlans {
    name:       string;
    value:      string;
    discount:   number;
    variations: Variation[];
}

export interface Variation {
    dataplan_id:    string;
    network:        number;
    plan_type:      string;
    plan_network:   string;
    month_validate: string;
    plan:           string;
    plan_amount:    string;
    name:           string;
}


export interface IBuyDataResponse {
    status:  string;
    message: string;
    data:    IBuyData;
}

export interface IBuyData {
    transaction_status: string;
    reference:          string;
    mobile_number:      string;
    plan:               string;
    network:            number;
    Ported_number:      boolean;
    balance_before:     number;
    balance_after:      number;
    medium:             string;
    plan_amount:        string;
    data_plan:          DataPlan;
    user:               User1;
    wallet:             Wallet2;
}

export interface DataPlan {
    dataplan_id:    string;
    network:        number;
    plan_type:      string;
    plan_network:   string;
    month_validate: string;
    plan:           string;
    plan_amount:    string;
    name:           string;
}

export interface User1 {
    uid:      string;
    fullname: string;
    username: string;
    email:    string;
    phone:    string;
    role:     string;
}

export interface Wallet2 {
    uid:    string;
    email:  string;
    amount: number;
    bonus:  number;
}


export interface IGetAllTransactionsResponse {
    status:  string;
    message: string;
    data:    IGetTransaction[];
}

export interface IGetTransaction {
    uid:            string;
    status:         string;
    email:          string;
    purpose:        string;
    reference:      string;
    confirm_status: boolean;
    medium:         string;
    createdAt:      string;
    user:           User2;
    details:        Details;
}

export interface Details {
    amount:     number;
    reference:  string;
    email:      string;
    phone:      string;
    network:    string;
    network_id: string;
    plan_id:    string;
}

export interface User2 {
    uid:           string;
    fullname:      string;
    username:      string;
    email:         string;
    phone:         string;
    emailVerified: boolean;
    role:          string;
}
