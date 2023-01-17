---
title: "Bitcoin's Software Sustainability"
date: '2022-03-12'
---

Crypto currencies have been at the center of a heated debate in the last couple of years, most of the debate is centered around each cryptos' individual philosophy or blockchain's excessive use of energy. Here the discussion will go a different way, the analysis that follows is centered around Bitcoin and its sustainability in terms of software.

To start things of let's do a brief introduction about Bitcoin considering the reader already has a general idea on what a crypto currency is. Bitcoin (BTC) is a crypto currency that relies on a technology called blockchain to operate and make transactions unique, this gives the protocol a level of security that could be considered insurmountable. Today there are a lot of different crypto assets—these are assets that exist in the digital world—, but undoubtably BTC is the most mature of them all. The biggest issue with this is that currently none of these assets are a widely used currency or a stable store of value—not even BTC—, this same argument was highlighted by Joe Weisenthal in Bloomberg's Morning Brief of 25 April 2022 after an interview with Sam Bankman-Fried, co-founder and CEO of crypto trading platform FTX.

As mentioned earlier this writing will not focus on the philosophical debate—consider the economic debate part of this as well—so no more mentions of this will happen throughout the article. BTC will be considered a simple means of exchange to buy and sell goods in the real world as if it were comparable to US dollars. Other crypto currencies will be mentioned, but comparison among them will be limited to technological aspects and nothing else.

Having cleared this let's dive into BTC's technology specifics and explain how it works, what are its vulnerabilities and how its future could pan out. The first thing to consider is blockchain, this is the technological engine that powers most crypto assets, but its use and implementation can change drastically between applications. In general terms how this technology works is somewhat simple: there is a network of what we could consider validators that check every single log into this blockchain, once 51% of the validators agree on a certain log this event is added to the chain and it can never be overwritten[^1].

The main vulnerability found in this technology is that if a single entity owns over 50% of all the nodes, it would be able to manipulate the existing log at will. Because of this, blockchain is considered so robust, owning over 50% of a worldwide network of costly nodes would be impossible for almost anyone. On the other hand, this same idea of a big network is what many people think gives BTC—and basically any other asset—the possibility to succeed. This phenomenon is call network effect, and it basically means that as more people adopt something more people will be willing to get on board in the future[^2].

Having all this clear leads naturally towards one of the most pressing issues faced by this technology, how the hell is a single system—even if it is a network—able to maintain so much information and is this a sustainable practice in the long term? The answer to the first part of this questions would go along the lines "good question!" and the answer of the latter would be a hard cold "no". To add some technical background to the answer of the first half of the question let's consider what BTC is currently doing to surmount this issue and what is its current outlook.

To get a hold of this question it is necessary to understand how BTC layers work and what they do[^3]. Each incremental layer is supposed to help the network ease off traffic and make it more sustainable for the long run:
- Layer 1: this is Bitcoin's bed stone; it references its underlying blockchain infrastructure and its regular operation. This is the most inefficient part of the protocol, but it is necessary for it gives security, functionality, and the sense of value.
- Layer 2: the second layer in this protocol is supposed to help the previous one and there are currently many different implementations and ideas to solve these bottlenecks. A mayor example of a layer 2 solution for BTC would be the Bitcoin Lightning Network[^4] and what it basically gives is the ability to transact without recording every movement into the blockchain—this, as already laid out, is expensive.
- Layer 3: this last layer involves apps and other more user-friendly ways in which users can access BTC. Binance and Coinbase are important players in this arena, but Bitcoin purists don't like the idea of this last layer.
In short, the first layer provides security, the second layer offers high throughput, and the third layer offers an accessible way for the average person to use this technology. None of these layers are supposed to affect BTC's general security, but some of its main goals—decentralization as a clear example—might be affected by this indirectly.

For a last consideration let's look at what other blockchains are doing to solve this problem and how BTC compares to them. Only the differences between BTC and Ethereum (ETH) will be presented, but the reader can take this even further on another time[^5]. The main difference between these two blockchains is how nodes validate transactions, BTC uses a validation scheme called Proof-of-Work (PoW) and ETH—in its most recent version—uses one called Proof-of-Stake (PoS). In this respect BTC's algorithm—PoW—is a lot more intensive, it forces miners to make trillions of numerical guesses to produce a valid block and thanks to this difficulty miners take approximately 10 minutes to find a block collectively[^6].

On the other hand, PoS is a lot less resource intensive, it validates transactions base on stakers—the PoS equivalent to miners—that lock up funds in a special smart contract and this allows them to validate transactions. Every time a new block is needed an algorithm gives a specific staker the opportunity to publish it based on this staker's percentage of the total staked funds. Someone who owns 30% of the staked funds has a 30% chance to win this "lottery" every time the blockchain wants a new block[^7].

To end this article, I'd like to point out my perspective on this topic. I think the digital world—cryptos included—is the way of the future and that cryptos are here to stay, nonetheless technology moves at breakneck speed and I'm not sure that the current blockchain protocols will end up being the winners of them all—here is where you consider each project's philosophy. I believe to understand—at least the basics of—BTC's added value and what differentiates it from all other digital assets[^8], but I don't know if this is a strong enough argument to advocate its long-term survival. There are some clear areas where it needs to improve, but all-in-all innovation is going in the right direction and I think many of the issues presented in here will be solved in a not too distant future.
 
## References
- Friedman, L. & Buterin V. (2021) *Ethereum, Cryptocurrency, and the Future of Money*. November 23, 2021. YouTube, website: https://www.youtube.com/watch?v=3x1b_S6Qp2Q
- M. Waldrop (1992) *Complexity – The Emerging Science at the Edge of Order and Chaos*. USA: Stripe Press.
- Friedman L. & Saylor M. (2022) *Bitcoin, Inflation, and the Future of Money*. May 3, 2022. YouTube, website: https://www.youtube.com/watch?v=mC43pZkpTec
- Binance Academy (2018) *A Beginner's Guide to Bitcoin's Lightning Network*. May 2, 2022. Binance, website: April 25, 2022. Medium, website: https://academy.binance.com/en/articles/what-is-lightning-network
- River Financial (ND) *Proof-of-Work (PoW) vs Proof-of-Stake (PoS)*. May 2, 2022. River Financial, website: https://river.com/learn/proof-of-work-pow-vs-pos-proof-of-stake/

[^1]: This is a general level overview of Blockchain, to get a deeper understanding I would recommend listening to the following podcast Friedman L. & Buterin V. (2021). It is a conversation between Lex Friedman—one of my favorite podcast hosts—and Vitalik Buterin—co-creator of Ethereum and ether.

[^2]: This idea has a nice correlation with the concept of increasing returns in economics, to get a better picture about this I'd recommend Waldrop M. (1998), it is one of my favorite books of all times.

[^3]: For a much better explanation of this I would recommend listening to Friedman & Saylor (2022). It is a conversation between Lex Friedman and Michael Saylor—one of the most influential personas in the crypto atmosphere.

[^4]: I was analyzing the installation of a Lightning Network node in October 2021 and thus I have a bunch of interesting reference for this. Technical details: https://www.lightningnode.info/. Economic feasibility of a node: https://bitcoinmagazine.com/guides/how-to-operate-a-profitable-lightning-mode. Another interesting resource to learn about this topic more broadly would be Binance Academy (2018).

[^5]: Another interesting use case can be found in Solana (https://solana.com/).

[^6]: A miner is a node of the main BTC blockchain, this are the most profound performers in all the blockchain.

[^7]: To dive deeper into this topic check River Financial (ND).

[^8]: Here Michael Saylor would argue that BTC is a property instead of a security plus some other compelling economic arguments. I insist on listening to Friedman L. & Saylor M. (2022).