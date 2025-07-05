---
title: Building this Blog
date: '2025-07-05'
categories: 
    - "software development"
    - "blog"
image: true
---

# The Skinny of It

This is a blog post documenting me being a dev, who quite frankly doesn't know jack about modern web development, and trying to make a semi-nice, modern feeling blog. We're a long way out from the easy static HTML blogs of old. Ideally, if I was a normal user of the internet, I probably would've just made a WordPress or Wix site, or one of the countless other sites that boast being "super simple" and "add AI". But I'm a developer that wanted to get maximum control over the look, feel, content, and moderation of my site. The other obvious reason is that I wanted to learn Svelte/SvelteKit for another project that I'm working on, and this was a more appealing project than making another to-do list. So then ...

---

## Why SvelteKit?

I went with SvelteKit for 2 main reasons.

**Firstly**, I've been told by a multitude of friends that SvelteKit is a fantastic framework to use and that it's really easy to build things out quickly with. I wanted to build this blog quickly, in about a week to be exact (that was mostly CSS but I'll get to that later). Plus I've done a website before following a React tutorial, which was fine, but the learning curve was definitely high.

TBF in React's defense, at the time of making that first React app I had only used JavaScript a handful of times. So the initial dislike of React was probably more about me not really loving the feel of JavaScript. Since then, me and TypeScript have an uneasy understanding, and I'm able to manage.

**Second**, when I was looking into rendering my markdown posts as blog posts (I love Obsidian and will probably talk about it at a later point) I found out about mdsvex, which is a Svelte preprocessor similar to MDX, which I had seen recommended before. All I had to do is slap mdsvex into my `svelte.config.js` and I was off to the races. I could use markdown files as Svelte components.

### Other Design Decisions

I ended up using TypeScript for this project. It wasn't strictly necessary and quite frankly probably would've been much faster if I didn't have to make extra types all the time. But I come from the Java world and types make me feel safe (_that was a pun_).

I didn't feel like a static site like this really needed a db. That would've been extra complications for a site that I really don't think will get updated all that often. So I opted to use Vite to glob all the markdown files at build time since I really don't expect there to be all that many. If I decide to change that later I'll be sure to come back and update this post.

---

## The Structure of the Blog

Here's a simple breakdown of the blog:

```
src/
├── routes/
│   ├── +layout.svelte              (main layout for all pages)
│   ├── +page.svelte                (homepage)
│   ├── +page.ts                    (loads markdown data for homepage)
│   │
│   ├── about/
│   │   └── +page.svelte            (about page)
│   │
│   ├── contact/
│   │   └── +page.svelte            (contact page)
│   │
│   └── blog/
│       ├── +page.svelte            (blog listing page)
│       ├── +page.ts                (loads all blog posts)
│       │
│       └── [slug]/                 (dynamic routing for individual posts)
│           ├── +page.svelte        (single blog post template)
│           └── +page.ts            (loads specific markdown file)
│
├── lib/
│   ├── utils/                      (helper functions)
│   ├── types/                      (TypeScript type definitions)
│   ├── assets/
│   │   └── posts/                  (markdown blog posts)
│   ├── components/                 (reusable Svelte components)
│   ├── styles/                     (CSS files)
│   └── stores/                     (Svelte stores for state)
│
└── static/
    ├── images/                     (static images)
    └── gifs/                       (static GIFs)

URL Examples:
┌─────────────────────────────────────────────────────────────┐
│ /                    → homepage (+page.svelte)             │
│ /about               → about page                          │
│ /contact             → contact page                        │
│ /blog                → blog listing                        │
│ /blog/my-first-post  → individual post via [slug] routing  │
│ /blog/sveltekit-tips → another post via [slug] routing     │
└─────────────────────────────────────────────────────────────┘

Data Flow:
┌──────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Markdown Files   │───▶│ Vite Glob       │───▶│ +page.ts Load   │
│ (lib/assets/     │    │ (build time)    │    │ Functions       │
│  posts/)         │    │                 │    │                 │
└──────────────────┘    └─────────────────┘    └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │ +page.svelte    │
                                               │ Components      │
                                               └─────────────────┘
```

The structure of this blog is super simple, but even so, I'd never done anything with SvelteKit before. So I ended up looking at a few other people's examples of blogs and found that it was super simple to route with SvelteKit. Every page has its own +page.svelte component. A few pages have a +page.ts to handle the load function for all the data that is being fetched from markdown files. As for the individual blog pages, those are all done through a single +page.svelte using SvelteKit's dynamic routing (which rocks fyi).

My `lib` directory is where I'm holding all my markdown files and I'm globbing them at build time to get all my markdown files (as well as having all my standard utils, types, and components in there as well). The markdown files have all their metadata stored in the YAML Front Matter of each markdown post.

Images and gifs have no metadata that needs to be parsed, so I just slapped those in the static directory. Besides that, all other project structures are just standard. Super simple site!

---

## Styling this Site Kinda Sucked

Everything I imagined took a day or two. Like I mentioned, the structure is simple and the code to fetch all the metadata is super simple.

But there was a small problem with the goal I set out: "semi-nice, modern feeling blog"...

**semi-nice**.

I was going to have to make the blog look good. I am a backend engineer - nothing I make ever looks particularly nice. But I made my life way harder than it had to be because in my hubris I chose to write this site using plain CSS.

So how did I get past this? Plagiarism and simplicity. I found a style that looked easy to replicate from another website, hit `f12` to inspect and yoinked it.

I had to fill out a survey for Backership during the early stages of making the blog and the pop-up window had a super cool box shadow on it. The entire site was designed around that.

For the color palette, I chose 3 colors, and the whole site was made using those 3 colors (and black and white of course). That didn't change until I added in a dark mode toggle at the very end of development.

---

## Domain and Hosting

For my domains I use [Pork Bun](https://porkbun.com/), they're great and unlike domain.com they didn't scam me out of **70 dollars** in college. Can't recommend them enough.

Hosting was a bit trickier. I didn't want to spin up an AWS EC2, and I wasn't super keen on setting up my home server for anything outside of my local network. When doing my research on where to host my site, I saw a lot of glowing reviews for Netlify, so I'm trying them out. I'm not sure how I feel about their _"freemium"_ model, but I guess I'll figure it out in the long term.

### Now What

And that's about it. There are a few more things here, and there I need to add for the site. But it's up and running. I've got a lot more blog posts I want to write and have some drafts written out, so I guess you'll be hearing from me again soon. Feel free to reach out and connect.