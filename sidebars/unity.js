/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  unity: [
    {
      type: "doc",
      label: "Overview",
      id: "index",
    },
    {
      type: "doc",
      label: "Getting Started",
      id: "getting-started",
    },
    {
      type: "doc",
      label: "ThirdwebManager",
      id: "ThirdwebManager",
    },
    {
      type: "doc",
      label: "ThirdwebSDK",
      id: "thirdwebsdk",
    },

    {
      type: "category",
      label: "Connecting to Wallets",
      collapsed: false,
      items: [
        // Wallets
        {
          type: "doc",
          label: "Metamask",
          id: "connecting-to-wallets/Metamask",
        },
        {
          type: "doc",
          label: "Coinbase",
          id: "connecting-to-wallets/Coinbase",
        },
        {
          type: "doc",
          label: "WalletConnect",
          id: "connecting-to-wallets/WalletConnect",
        },
        {
          type: "doc",
          label: "Injected",
          id: "connecting-to-wallets/Injected",
        },
        {
          type: "doc",
          label: "LocalWallet",
          id: "connecting-to-wallets/LocalWallet",
        },
        {
          type: "doc",
          label: "SmartWallet",
          id: "connecting-to-wallets/SmartWallet",
        },
        {
          type: "doc",
          label: "Hyperplay",
          id: "connecting-to-wallets/Hyperplay",
        },
        {
          type: "doc",
          label: "EmbeddedWallet",
          id: "connecting-to-wallets/EmbeddedWallet",
        },
        // Wallet Actions
        {
          type: "category",
          label: "Wallet Actions",
          items: [
            {
              type: "autogenerated",
              dirName: "connecting-to-wallets/wallet-actions",
            },
          ],
        },
      ],
    },

    // Prefabs
    {
      type: "category",
      label: "Prefabs",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Connect Wallet Button",
          id: "prefabs/ConnectWallet",
        },
        {
          type: "doc",
          label: "NFT Renderer",
          id: "prefabs/NFT",
        },
      ],
    },

    // Interacting with contracts
    {
      type: "category",
      label: "Interacting with Contracts",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "interacting-with-contracts/0 Overview",
        },
        {
          type: "doc",
          label: "Get A Contract",
          id: "interacting-with-contracts/get",
        },
        {
          type: "doc",
          label: "Read Contract Data",
          id: "interacting-with-contracts/read",
        },
        {
          type: "doc",
          label: "Initiate Contract Transactions",
          id: "interacting-with-contracts/write",
        },
        {
          type: "doc",
          label: "Transaction Builder",
          id: "interacting-with-contracts/prepare",
        },
        {
          type: "category",
          label: "Using Extensions",
          collapsed: false,
          items: [
            {
              type: "category",
              label: "ERC721",
              items: [
                {
                  type: "autogenerated",
                  dirName: "interacting-with-contracts/extensions/erc721",
                },
              ],
            },
            {
              type: "category",
              label: "ERC1155",
              items: [
                {
                  type: "autogenerated",
                  dirName: "interacting-with-contracts/extensions/erc1155",
                },
              ],
            },
            {
              type: "category",
              label: "ERC20",
              items: [
                {
                  type: "autogenerated",
                  dirName: "interacting-with-contracts/extensions/erc20",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Using Prebuilt Contracts",
          collapsed: false,
          items: [
            {
              type: "autogenerated",
              dirName: "interacting-with-contracts/prebuilt-contracts",
            },
          ],
        },
      ],
    },

    // Contract Events
    {
      type: "category",
      label: "Contract Events",
      items: [
        {
          type: "autogenerated",
          dirName: "events",
        },
      ],
    },

    // Storage
    {
      type: "doc",
      label: "Storage",
      id: "storage/storage",
    },

    // Submit Wallet
    {
      type: "doc",
      label: "Submit Wallet",
      id: "submit-wallet",
    },
  ],
};

module.exports = sidebars;
