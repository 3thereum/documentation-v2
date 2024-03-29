---
title: Funding Rates
slug: tLFN-funding-rates
createdAt: Wed Jul 20 2022 10:32:50 GMT+0000 (Coordinated Universal Time)
updatedAt: Fri May 19 2023 19:58:17 GMT+0000 (Coordinated Universal Time)
---

Perpetuals futures have no expiry date, final settlement, or delivery. As such, funding rate payments are used as the incentive mechanism to bring the perpetual futures' mark price in line with the oracle price.&#x20;

(For instance, a user with a long position in a market whose mark price is, on average, below the oracle price will receive a payoff proportional to their position size).

| Field               | Description                                     |
| ------------------- | ----------------------------------------------- |
| Funding Rate % Calc | 1/24 \* (market_twap - oracle_twap)/oracle_twap |
| TWAP Parameters     | EMA with span = 1 hour                          |
| Mark TWAP Calc      | (bid TWAP + ask TWAP) / 2                       |
| Frequency           | End of Hour\* (9:00 AM, 10:00 AM, ...)          |

Note: Funding rate magnitudes are clamped at 0.12626% and are delayed at large divergences (see [Oracles](<../Drift Protocol v2 Docs/Oracles.md>)). Individual Market TWAP updates utilize the side of the book for trade executions, Bid and Ask TWAPs in the market are calculated and/or estimated on every trade.&#x20;

### Unrealised -> Realised Funding

Funding rates are updated _lazily_ every hour\*.&#x20;

Any time a user opens or closes a position, the exchange tries to update the funding rate.&#x20;

The funding rate will still be updated if enough time has passed and no position has been opened or closed.&#x20;

The update will reflect the premium or discount between the DAMM’s mark price and the oracle’s price TWAP over the previous hour.&#x20;

The cumulative funding rate is checked against user positions in case the off-chain funding rate bot does not trigger on the hour. This will show up as "Unrealised P\&L" until your next user action within the market (such as a trade, deposit, withdraw etc.), see also [P\&L](<../Drift Protocol v2 Docs/P_L.md>).

**\*\*\*\*** if no market trades and/or funding update calls occur within the first \~20 minutes of the hour, the next funding update will be delayed an additional hour.\*

### Capped Symmetric Funding

Drift Protocol aims to provide a symmetric funding rate to both sides of the market. When there is a long-short imbalance within the DAMM, the protocol's market-specific Rebate Pool can be used to pay (or receive) the cost delta between the longs and the shorts.&#x20;

If the pool is empty or does not have enough to provide for funding (2/3 of the Rebate Pool balance available at each funding interval), then the receipts for funding will be capped to the available amount.

See [Rebates](https://docs.drift.trade/funding-rates) for funding pool sizes where the funding paid from the Rebate Pool will be capped. This ensures that the risk is spread in the system and the Insurance Fund isn't drained by funding rates.&#x20;

Over the hour, the amount available in the Rebate Pool will increase from fees as trades occur, so any existing predicted capped rate should move closer to being balanced.

**Example: **

For BTC-PERP you can check the recent history to get a better idea of what shorts will receive

Example funding calculation:&#x20;

`1/24 * (174.643 - 174.450)/(174.450) = 0.00460% (40.27% APR)`

![example data](../../static/assets/mBFRK1HfhF-9o6IaExcW0_screen-shot-2021-12-30-at-115308-am.png)

### Oracle Resilience

Drift's on-chain calculation of a market's oracle TWAP is updated only on trades which incorporates the oracle's confidence interval and a few interpolations to provide the most accurate and resilient value.&#x20;

Read more about protective checks in [Oracles](<../Drift Protocol v2 Docs/Oracles.md>).

### APR calculation

Funding rates can be showcased in annual terms for easier comparison.

**APR (annual percentage rate)** is calculated `rate x 24 x 365.25`

**APY** would be: `(1 + rate) ^ (24 x 365.25) - 1`

:::hint{type="info"}
One can approximately track **APY** by allocating funding receipts back into the position (excluding fees/rebates)
:::
