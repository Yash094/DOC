---
slug: /sdk.marketplacev3directlistings.buyfromlisting
title: MarketplaceV3DirectListings.buyFromListing() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# MarketplaceV3DirectListings.buyFromListing() method

Buy direct listing for a specific wallet

## Example

```javascript
// The ID of the listing you want to buy from
const listingId = 0;
// Quantity of the asset you want to buy
const quantityDesired = 1;

await contract.directListings.buyFromListing(
  listingId,
  quantityDesired,
  "{{wallet_address}}",
);
```

**Signature:**

```typescript
buyFromListing(listingId: BigNumberish, quantityDesired: BigNumberish, receiver?: string): Promise<TransactionResult>;
```

## Parameters

| Parameter       | Type         | Description                                                                                 |
| --------------- | ------------ | ------------------------------------------------------------------------------------------- |
| listingId       | BigNumberish | The listing id to buy                                                                       |
| quantityDesired | BigNumberish | the quantity to buy                                                                         |
| receiver        | string       | _(Optional)_ optional receiver of the bought listing if different from the connected wallet |

**Returns:**

Promise&lt;[TransactionResult](./sdk.transactionresult.md)&gt;

## Remarks

Buy from a specific direct listing from the marketplace.