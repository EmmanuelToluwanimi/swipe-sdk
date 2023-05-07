# swipe-sdk

A Javascript project SDK built for Swipe-Telecoms API services.

You can vist our [homepage](https://www.swipetelecom.com.ng/) and our official [Postman Documentation](https://documenter.getpostman.com/view/17269652/2s93eVYEPj) for more information and insights.


# Installation

Run  

```bash
npm i swipe-sdk
```

# Use

To use this package in your project, import the method below.

```js
import SwipeSdk from "swipe-sdk";

const apiKey = "xxxx-xxxx-xxxx";
const swipe = new SwipeSdk(apikey); //- instantiate the class
```

## NOTE

All methods are promise based.

# Features

## User - Get User Details

The GetUserDetails method calls the user details endpoint.

```js
swipe.getUserDetails().then((res) => console.log(res));
```

## Webhook - Create or Update Webhook

The updateWebhook method calls the update webhook endpoint. You can use the endpoint to create a new webhook, if you don't have one. Also it can be used to update an existing webhook.

```js
const payload = {
    webhookUrl: "your-webhook-url",
}

swipe.updateWebhookUrl(payload).then((res) => console.log(res));
```

## Data Plans - Get Available Data Plans

The Get Data Plans method calls the endpoint to get available data plans.

```js
swipe.getDataPlans().then((res) => console.log(res));
```

## Data Plans - Buy Data

The Buy Data Plan method calls the endpoint to get buy or subscibe to available data plans. It takes in few parameters as seen below.

```js
const payload = {
    mobile_number: string, // the mobile number you desire to subscribe to.
    reference:     string, // the field is optional, if not passed it will be auto-created.
    plan:          string, // the plan ID to subscribe to e.g "252".
    network:       number, // the network ID to subscribe to e.g 1.
    ported_number: boolean // whether the phone number is a ported number.
}

swipe.buyDataPlan(payload).then((res) => console.log(res));
```

## Transaction - Get All Data Transactions

The Get All Data Transaction method calls the endpoint to get data transactions made by a user. 

It is a paginated endpoint which is optional, the parameters are as shown below. Also it returns an array of transactions.

To technially use it for pagination, the numnber of limit should be constant, while number of offset can increased by an constant interval e.g 0, 5, 10 etc to get more results.

```js
const pagination = {
    limit: number, // the number of results to retrieve e.g 5. Default value if not provided is 10.
    offset: number // the number of results to skip e.g 0 or 5. Default value if not provided is 0.
}

swipe.getAllDataTransactions(pagination).then((res) => console.log(res));
```

## Transaction - Get Data Transaction By Reference

The Get Data Transaction By Reference method calls the endpoint to get data transaction made by a reference. 

The endpoint can be used to verify the data transactions. The endpoint takes a reference value as a parameter.

```js
const reference = "swipe-reference-example";

swipe.getDataTransactionByReference(reference).then((res) => console.log(res));
```

## Footnote

This project is an SDK for Swipe Telecommunication API services. Feel free to reach out to us for any complaint or enquiries. 


This project is open sourced by the Swipe Telecommunication.

You can vist our [homepage](https://www.swipetelecom.com.ng/) and our official [Postman Documentation](https://documenter.getpostman.com/view/17269652/2s93eVYEPj) for more information and insights.

## Thank you 🚀🚀🚀
