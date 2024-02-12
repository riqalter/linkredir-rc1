<a href="https://nextjs.org">
  <h1 align="center">
   <a href="https://links.riq.my.id/" tardet="_blank">
    linkredir-rc1
   </a>
   URL Shortener
  </h1>
</a>

<p align="center">
  <a href="https://links.riq.my.id/" tardet="_blank">linkredir-rc1</a> self hostable, feature rich, minimalistic and open source URL shortener. Built with Next.js, Drizzle, NextAuth and Postgres.
</p>

## Features

Built on top of [Onset](https://onset.vercel.app) a Next.js starter that comes with step-by-step instructions to understand how everything works, easy for both beginners and experts alike and giving you the confidence to customize it to your needs. Built with Next.js 14, Drizzle (Postgres), NextAuth/Auth.js.

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Auth.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.
- [Drizzle](https://orm.drizzle.team/) – Typescript-first ORM for Node.js

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [Neon](https://neon.tech/) – The fully managed serverless Postgres with a generous free tier

### One Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Friqalter%2Flinkredir-rc1&env=NEXT_PUBLIC_APP_URL,POSTGRES_URL,NEXTAUTH_SECRET,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET&project-name=linkredir-rc1&repository-name=linkredir-rc1)

### Local Development

Clone & create this repo locally with the following command:

> Note: You can use `npx` or `pnpx` / `pnpm dlx` as well

```sh
pnpm dlx create-next-app linkredir --example "https://github.com/riqalter/linkredir-rc1"
```

1. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

2. Install dependencies using bun:

```sh
pnpm i
```

3. Start the development server:

```sh
pnpm dev
```

## Credits

This project is inspired by [@shadcn](https://twitter.com/shadcn)'s [Taxonomy](https://github.com/shadcn-ui/taxonomy).

[![Vercel](https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg)](https://vercel.com)
