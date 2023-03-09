---
slug: /sdk.transaction.getgaslessoptions
title: Transaction.getGaslessOptions() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Transaction.getGaslessOptions() method

**Signature:**

```typescript
getGaslessOptions(): {
        openzeppelin: {
            relayerForwarderAddress?: string | undefined;
            relayerUrl: string;
            useEOAForwarder: boolean;
        };
        experimentalChainlessSupport: boolean;
    } | {
        biconomy: {
            apiId: string;
            apiKey: string;
            deadlineSeconds: number;
        };
    } | undefined;
```

**Returns:**

{ openzeppelin: { relayerForwarderAddress?: string \| undefined; relayerUrl: string; useEOAForwarder: boolean; }; experimentalChainlessSupport: boolean; } \| { biconomy: { apiId: string; apiKey: string; deadlineSeconds: number; }; } \| undefined