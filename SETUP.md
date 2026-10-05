# Setup

How to run BroncoNotes on your own machine.

Prerequisites:

- [Node.js](https://nodejs.org/en/download) 18.17 or newer
- A Convex account ([sign up](https://dashboard.convex.dev))
- A Clerk account ([sign up](https://dashboard.clerk.com/sign-up))

Steps:

1. Clone the repo and install dependencies

```bash
git clone <your-repo-url>
cd BroncoNotes
npm install
```

1. Set up Convex by following the docs. Keep `npx convex dev` running while you work, and make sure `NEXT_PUBLIC_CONVEX_URL` ends up in `.env.local`.

- [Next.js Quickstart](https://docs.convex.dev/quickstart/nextjs) (Convex docs)

1. Set up Clerk and connect it to Convex by following the docs. Update `domain` in `convex/auth.config.js` to your own Clerk Issuer URL, since it currently points at my Clerk instance.

- [Integrate Convex with Clerk](https://clerk.com/docs/guides/development/integrations/databases/convex) (Clerk docs)
- [Convex & Clerk](https://docs.convex.dev/auth/clerk), Next.js section (Convex docs)

1. Add your Clerk publishable key to `.env.local` (find it in the Clerk dashboard)

```bash
NEXT_PUBLIC_CONVEX_URL=https://<your-deployment>.convex.cloud
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
```

1. In a second terminal, start the app and open <http://localhost:3000>

```bash
npm run dev
```

Other commands:

- npm run build (production build)
- npm run start (run the production build)
- npm run lint (lint the project)

Common problems:

- Blank page: `.env.local` is missing or you need to restart the dev server
- Dev server will not start: check the Node.js version against the [Next.js system requirements](https://nextjs.org/docs/app/getting-started/installation#system-requirements)
- Not authenticated errors: the domain in `convex/auth.config.js` does not match your Clerk Issuer, or the Clerk and Convex connection is not set up
- Type errors on `api` imports: `npx convex dev` is not running

Personal project adapted from Fullstack Notion Clone by Antonio Erdeljac
