---
slug: /sdk.token.getminttransaction
title: Token.getMintTransaction() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Token.getMintTransaction() method

Construct a mint transaction without executing it. This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.

**Signature:**

```typescript
getMintTransaction(to: string, amount: Amount): Promise<import("../..").TransactionTask>;
```

## Parameters

| Parameter | Type                      | Description                           |
| --------- | ------------------------- | ------------------------------------- |
| to        | string                    |                                       |
| amount    | [Amount](./sdk.amount.md) | The amount of tokens you want to mint |

**Returns:**

Promise&lt;import("../..").TransactionTask&gt;