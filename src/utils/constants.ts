import { IPagination, IReference } from "../interface/index";

export const baseUrl = "https://swipetelecom.com.ng/api/public";

export const ROUTES = {
  user: {
    details: {
      url: baseUrl + "/user",
      method: "GET",
    },
    webhook: {
      url: baseUrl + "/user/update-webhook",
      method: "POST",
    },
  },
  data_plans: {
    get: {
      url: baseUrl + "/data",
      method: "GET",
    },
    buy: {
      url: baseUrl + "/data/buy",
      method: "POST",
    }
  },
  transaction: {
    all: {
      url: (params: IPagination) => { return baseUrl + "/transaction/buy" },
      method: "GET",
    },
    reference: {
      url: (reference: IReference, params: IPagination) => { return baseUrl + "/transaction/reference/" + reference },
      method: "GET",
    }
  }
}