'use client'

import React from 'react';
import WormholeConnect, { WormholeConnectConfig, nttRoutes } from '@wormhole-foundation/wormhole-connect';

const config: WormholeConnectConfig = {
  network: 'Mainnet',
  chains: ['Base', 'Solana'],
  rpcs: {
    'Solana': 'https://mainnet.helius-rpc.com/?api-key=919f1efa-9d9d-45fc-9706-8f25a19790e2',
    'Base': "https://base-mainnet.g.alchemy.com/v2/BI5XlYByNdQfh3hcluwetuwR9KzTSn01"
  },
  tokens: ['Hyperluck'],
  routes: [
    ...nttRoutes({
      tokens: {
        HYPERLUCK_NTT: [
          {
            chain: 'Solana',
            manager: "NTT82Td1AsP6tZz6UYtzZVi6FgdD4VcyutfpABF6iN8",
            token: "5zuwrEpwbfgbgH8xRyfMdqiwHRe5VwrBPZNRxJW4pump",
            transceiver: [
              {
                address: "3zXcLJeWzUfFDJJ2KeJqTyKz25uCY1yiZHA2ovXCZCVR",
                type: 'wormhole',
              }
            ]
          },
          {
            chain: 'Base',
            manager: "0xBdee6ccfeB581aa7A177087565f519bD691bEC90",
            token: "0xBB460fdf5830F80eC95793BcCC84377703F9298F",
            transceiver: [
              {
                address: "0xa07398E662bF11139BC9F51CEcE09c9F0fe2AA3d",
                type: 'wormhole'
              }
            ]
          }
        ]
      }
    })
  ],
  tokensConfig: {
    HyperluckSol: {
      symbol: 'Hyperluck',
      tokenId: {
        chain: 'Solana',
        address: "5zuwrEpwbfgbgH8xRyfMdqiwHRe5VwrBPZNRxJW4pump"
      },
      icon: "https://pump.mypinata.cloud/ipfs/QmZHTED7jzzi7Yebr9bodkuhWj7ck14eDbZAkX5J87mJ7a?img-width=800&img-dpr=2&img-onerror=redirect",
      decimals: 6
    },
    HyperluckBase: {
      symbol: 'Hyperluck',
      tokenId: {
        chain: 'Base',
        address: "0xBB460fdf5830F80eC95793BcCC84377703F9298F"
      },
      icon: "https://pump.mypinata.cloud/ipfs/QmZHTED7jzzi7Yebr9bodkuhWj7ck14eDbZAkX5J87mJ7a?img-width=800&img-dpr=2&img-onerror=redirect",
      decimals: 18
    }
  }
}

const Wormhole: React.FC = () => {
  return <WormholeConnect config={config}/>
}

export default Wormhole



