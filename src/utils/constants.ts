import { IFetcher, IPagination, IReference } from "../interface/index";

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
      url: baseUrl + "/transaction",
      method: "GET",
    },
    reference: {
      url: (reference: string) => { return baseUrl + "/transaction/reference/" + reference },
      method: "GET",
    }
  }
}

export async function Fetcher({
  url,
  method,
  apiKey,
  body,
  pagination,
}: IFetcher) {
  let _url = pagination ? `${url}/?limit=${pagination.limit}&offset=${pagination.offset}` : url;
  return await fetch(_url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-type": "application/json; charset=UTF-8",
    }
  });
}