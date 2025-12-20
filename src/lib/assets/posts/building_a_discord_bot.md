---
title: Building a Discord Economy for my Friends
date: '2025-11-25'
categories:
  - "software development"
  - "discord"
  - "typescript"
image: true
---
# Why did I spend a week working on a Discord bot?

**A joke. This whole thing started as a dumb joke that ended up being a crud app.** The whole reason I built a discord bot was because my friend Colby (online known as Ignant) would joke about credits he'd give us for doing things he liked and disliked. Agree with him, you'd get yourself 100000 Ignant coins. If you said something dumb he'd say something along the lines of "subtract one billion million Ignant coins from his balance". Because of this and minor boredom and perhaps something undiagnosed, I decided to spend my week after work to continue getting better at typescript and make the Ignant points a real thing.

# So how'd I make it?

Before getting into my ramblings over a project that really isn't that complex, all the code is on github [here](https://github.com/Skumbl/IgnantShop), feel free to give it a look if you feel so inclined.

The tech stack is really simple this time, the only framework was discord.js, the rest of the stack is:

- Typescript
- Node
- discord.js
- SQLite

Starting with a blank node and typescript project, I implemented the beginning [guide](https://discordjs.guide/legacy) on discord.js's fantastic website. 

_I've actually made a discord bot before but I chose to go with discord.js this time because the framework I used last time `interaction.py` was nice enough, but I didn't care for the python workflow._

The other reason I chose discord.js as my framework, rather than it just being the most popular, was just how good the docs were. I looked through other discord api frameworks, and they looked nice to use, but I wanted clear, easy-to-follow docs with strong typing (which is why I sprung for using typescript rather than just writing the bot in javascript).

## A small aside about Typescript

The thing I've noticed about working with Typescript on a few small side projects now is how much abstraction there seems to be in everything I build out. Types within types within types. Don't get me wrong, I come from the world of statically typed compiled languages. But sometimes it feels too easy to abstract away everything and lose the original point of what I was doing. Anyway, speaking of original point, back to the article.

After following the guide, everything I built was pretty standard. At least from what I can tell as a new discord.js dev.

I defined a `Command` type that would hold the basics of a slash command aswell as a type for defining `Events`:
```ts
export interface Command {
    data: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder;
    execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}

export interface Event<K extends keyof ClientEvents = keyof ClientEvents> {
    name: K;
    once?: boolean;
    execute: (...args: ClientEvents[K]) => Promise<void> | void;
}
```

_If you're new to discord, slash commands are the very nice addition to discord's development tools that allow devs to register commands so they can auto complete and be stricter on user parameters rather than the old way of just using a symbol for the discord bot to parse._

After that, I built a script to go through all my commands that I defined in my command folder and register them with the server that I deployed the bot to.

For the CRUD functionalities I built out 3 tables:

- `wallet` - User balances and accounts
- `shop` - Available items for purchase
- `inventory` - User-owned items

After I defined those tables, I built out the following commands:
### Economy

- `/balance` - Check your coin balance
- `/leaderboard` - View top users by total worth

### Shop

- `/shop` - View all available items
- `/buy` - Purchase an item from the shop
- `/create-listing` - Create a new shop item (admin only)
- `/destroy-listing` - Remove a shop item (admin only)

### Admin

- `/create-account` - Create a new user account with starting amount (admin only)
- `/award` - Give coins to a user (admin only)
- `/deduct` - Remove coins from a user (admin only)

# Giving my friends a vice

After I built out the original bot, I wanted to give my friends something to do that wasn't just waiting to buy something. So I did what any reasonable man in his 20's would add.

✨_I put gambling in the bot_✨

I implemented a very simple slot machine. All it does is spin 3 different numbers from 0-9, and if you hit double matching numbers you get some money, and if you hit a triple match you get 10x your money back. The odds are something like you win 27(ish)% of the time. So I at least gave them way better odds than a casino would.

# Deploying the Bot

Something interesting about the development of the bot is that I chose to self host it on my proxmox server I have running at my place rather than spinning something up on a cloud service. I just spun up a small alpine container and pulled and built my project from my git repo as I update it. I'm sure I could set up a nicer build method, but for such a small project I'm not too concerned about it.

I'm still working on and off on the bot as I add blackjack and other funny ideas that come to me and my friends. I mean to post more frequently on things that aren't just things I built. But until then, take care of yourself and if you can, someone else too.
