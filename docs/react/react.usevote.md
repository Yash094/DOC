---
slug: /react.usevote
title: useVote() function
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## useVote() function

Hook for getting an instance of an `Vote` contract. This contract enables fully featured voting-based decentralized governance systems.

## Example

```javascript
import { useVote } from '@thirdweb-dev/react'

export default function Component() {
  const vote = useVote("<YOUR-CONTRACT-ADDRESS>")

  // Now you can use the vote contract in the rest of the component

  // For example, this function will get all the proposals on this contract
  async function getProposals() {
    const proposals = await vote.getAll()
    return proposals
  }

  ...
}
```

**Signature:**

```typescript
export declare function useVote(contractAddress?: string): Vote | undefined;
```

## Parameters

| Parameter       | Type   | Description                                                                          |
| --------------- | ------ | ------------------------------------------------------------------------------------ |
| contractAddress | string | <i>(Optional)</i> the address of the Vote contract, found in your thirdweb dashboard |

**Returns:**

Vote \| undefined