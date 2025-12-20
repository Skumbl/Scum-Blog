---
title: I Crashed My Discord Economy :(
date: '2025-12-19'
categories:
  - "software development"
  - "discord"
  - "typescript"
image: false
---
Hello! Yeah, what it says on the tin. I broke the discord economy I built. The bright side is my code did exactly what I intended it to do. The issue is that my code did exactly what I told it to do. You can find my post on the previous discord bot [here](https://scumble.dev/blog/building_a_discord_bot).

So let's start where we left off. I had finished the discord bot in the last post, but since 1.0 I've added multiple features. Some of these I knew I would be implementing ahead of time; others were the result of my friends giving me feedback.

As I've been working on and off on this discord bot, I've added release announcements with each feature. Here are the updates I've made since the last post:

---
### Ignant Shop Patch 1.01

_2025-11-22_

Since people wanted trading, I made it so people can transfer points between each other using the following commands:

`/transfer-points` `/transfer-items`

#### Currently in progress

- /blackjack
- /give all
- /refund (lets you return an item for 70% of its cost)
- update /help command
---
### Ignant Shop Patch 1.02

_2025-11-24_

Added an award-all function for Colby to make things easier:

`/award-all`

Updated `/help` with all new commands and adjusted message colors to not be so ugly.

#### Currently in progress

- `/blackjack`
- `/refund` (lets you return an item for 70% of its cost)
---
### Ignant Shop Patch 1.03

_2025-11-24_

It's FINALLY here! If you use the following command, you can now play blackjack :)

`/blackjack`

Updated transfer slash commands to display the correct name and updated `/help` with all new commands.

#### Currently in progress

- /refund (lets you return an item for 70% of its cost)
---
## How I Ended Up Implementing Blackjack

To build blackjack, I built it out similarly to how I built my other slash commands. Using Discord.js's SlashCommandBuilder, I created a `/blackjack` command that takes in a user's wager as an input.

Blackjack's logic itself is pretty simple. Since each game is its own separate instance of blackjack, I don't really need to worry about emulating a full deck, so I just pick cards at random. From there it's just a matter of checking user and "Dealer" states. The Dealer hits up to 16 then stops (this was to give the users on the server a slightly better chance; this will become a larger issue later).

The logic is split between the Blackjack Logic utility I built and the Event Handler I made to process slash commands. Game state is managed by the utility, while Dealer logic is primarily in the event handler in the form of helper functions. It's not ideal for project structure, but this is just a silly little discord bot :/

I also used Discord.js's `ButtonBuilder` to put buttons for hit and stand that emit blackjack hit and stand commands that would be handled specifically by the event handler so it would update the message with the new game state.

All code for this project is available on my GitHub [here](https://github.com/Skumbl/IgnantShop/blob/main/src/utils/blackjackLogic.ts).

**Blackjack Logic**

```ts
export type Card = {
    value: number;
    display: string | undefined;
}

export interface BlackjackGame {
    userId: string;
    bet: number;
    playerHand: Card[];
    dealerHand: Card[];
    gameOver: boolean;
}

const activeGames: Map<string, BlackjackGame> = new Map<string, BlackjackGame>();
const dealerThreshold: number = 16;

export function drawCard(): Card {
    const rand: number = Math.floor(Math.random() * 13) + 1;

    if (rand === 1) {
        return { value: 11, display: 'A' };
    }
    else if (rand >= 11) {
        const faces: string[] = ['J', 'Q', 'K'];
        return { value: 10, display: faces[rand - 11] };
    }
    else {
        return { value: rand, display: rand.toString() };
    }
}

export function calculateHand(cards: Card[]): number {
    let total: number = cards.reduce((sum: number, card: Card) => sum + card.value, 0);
    let aces: number = cards.filter((card: Card) => card.display === 'A').length;

    while (total > 21 && aces > 0) {
        total -= 10;
        aces--;
    }
    return total;
}

export function isBlackjack(cards: Card[]): boolean {
    return cards.length === 2 && calculateHand(cards) === 21;
}

export function startBlackjackGame(userId: string, bet: number): BlackjackGame {
    const game: BlackjackGame = {
        userId,
        bet,
        playerHand: [drawCard(), drawCard()],
        dealerHand: [drawCard(), drawCard()],
        gameOver: false,
    };

    activeGames.set(userId, game);
    return game;
}

// check if my user has an active game going
export function getGame(userId: string): BlackjackGame | undefined {
    return activeGames.get(userId);
}

export function clearActiveGames(): void {
    console.log('[Casino] Clearing active blackjack games');
    activeGames.clear();
}

export function deleteGame(userId: string): void {
    activeGames.delete(userId);
}

export function playerHit(game: BlackjackGame): void {
    game.playerHand.push(drawCard());
}

export function dealerHit(game: BlackjackGame): void {
    game.dealerHand.push(drawCard());
}

export function dealerPlay(game: BlackjackGame): void {
    while (calculateHand(game.dealerHand) < dealerThreshold) {
        dealerHit(game);
    }
}

export function gameOutcome(game: BlackjackGame): { result: string, payout: number } {
    const playerVal: number = calculateHand(game.playerHand);
    const dealerVal: number = calculateHand(game.dealerHand);
    const playerBlackjack: boolean = isBlackjack(game.playerHand);
    const dealerBlackjack: boolean = isBlackjack(game.dealerHand);

    if (playerVal > 21) {
        return { result: 'Player busted! Dealer wins.', payout: 0 };
    }
    if (dealerVal > 21) {
        return { result: 'Dealer busted! You win!', payout: game.bet * 2 };
    }

    if (playerBlackjack && dealerBlackjack) {
        return { result: 'Push!', payout: game.bet };
    }
    if (playerBlackjack) {
        return { result: 'Blackjack! You win!', payout: game.bet * 2.5 };
    }
    if (dealerBlackjack) {
        return { result: 'Dealer has blackjack! You lose.', payout: 0 };
    }

    if (playerVal > dealerVal) {
        return { result: 'You win!', payout: game.bet * 2 };
    }
    else if (playerVal < dealerVal) {
        return { result: 'Dealer wins!', payout: 0 };
    }
    else {
        return { result: 'Push!', payout: game.bet };
    }
}

export function formatHand(cards: Card[], hideFirst: boolean = false): string {
    if (hideFirst) {
        return `[??] [${cards.slice(1).map((c: Card) => c.display).join('] [')}]`;
    }
    return `[${cards.map((c: Card) => c.display).join('] [')}]`;
}
```
---
### Ignant Shop Patch 1.04

_the gambling update_

_2025-11-29_

@everyone the following quality of life features were added to the bot to make gambling much nicer

`/lost` - gives total amount of money you've lost `/loser-leaderboard` - gives top ten biggest losers in the server

All gambling should include your new wallet balance at the bottom so you don't need an extra command to check. Re-balanced the gamba machine for the following outcomes instead of 5x / 10x for the big jackpots. Here are the new payouts:

- triple 7's - 100x payout
- triple _ - 20x payout
- double _ - 5x payout

Updated `/help` with all new commands.

#### Nothing currently in progress. Feel free to @ me for suggestions.
---
## This Was the Update That Broke Everything

So here we are. Up until now, all the bugs I've had have been formatting problems and fun little issues. We were gambling so many of the coins I thought it would be fun to make some quality of life features and I'd rebalance the outcomes of the games so they paid out more. That would've been fine if I had known about the concept of EV.

It is likely that you already see the issues with the slot machine, and if you don't then you're no better than I was.

The updated EV on the slot machine is as follows:

```
Total EV = 0.100 + 0.180 + 1.350 = 1.63 
```

That's a 163% return rate. Because the only way to get any currency in the Discord shop is by having Colby award it to you, the only other way to get any money is by gambling. So 4 users found this exploit and started to inflate the amount of currency in the system. Okay, so now 4 users have way more money than anyone else.

Well, earlier in the patch notes you will see that I also added a way for users to transfer currency between each other.

So within 2 hours of this patch being live, users had items from the shop that they shouldn't have been able to buy, users had 50x-ed their money, and I had to kill the bot to stop them.

I had effectively created a failed state's economy in DISCORD.

So, needless to say I had to patch this.
---
### Ignant Shop Patch 1.05

_the gambling update - post collapse_

_2025-11-29_

@everyone All ill-gotten gains were removed from the slot machine payout fiasco. I didn't touch people's inventory since I didn't know what was and wasn't legit. Re-balanced the gamba machine for the following outcomes instead of 10x / 30x / 100x for the big jackpots. Here are the new payouts:

- triple 7's - 50x payout
- triple _ - 20x payout
- double _ - 2.5x payout

That should give the house a 5% overall edge, much more generous than a real casino's 15%, but not so much that we break the economy again.

#### Nothing forward-facing currently in progress. Feel free to @ me for suggestions.
---

## So What Now?

The latest patch I implemented fixed a timeout issue when we have a lot of users to `/award-all` which, when failing, caused the bot to crash. I've also added much more robust logging to the bot to keep track of transactions between wallets.

But for the time being, I think I'm mostly done with this little side project. There will hopefully be more side projects coming with some time, as well as a few opinion pieces I'd like to write. But until then, take care of yourself and if you can, someone else too.
