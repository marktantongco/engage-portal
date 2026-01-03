# Setup Guide

This guide will help you configure Clerk authentication and Supabase database for your Engage Portal application.

## Prerequisites

- ✅ Next.js project created
- ✅ GitHub repository connected
- ✅ Supabase project created
- ✅ Vercel deployment configured

## 1. Clerk Authentication Setup

### Step 1: Create a Clerk Account
1. Go to [https://clerk.com](https://clerk.com)
2. Sign up or sign in with GitHub
3. Create a new application
4. Choose "Next.js" as your framework

### Step 2: Get Your Clerk Keys
1. In your Clerk Dashboard, go to **API Keys**
2. Copy the following:
   - **Publishable Key** (starts with `pk_test_` or `pk_live_`)
   - **Secret Key** (starts with `sk_test_` or `sk_live_`)

### Step 3: Add Clerk Keys to Environment Variables
Add these to your `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

### Step 4: Configure Clerk URLs (Optional)
The default URLs are already set in `.env.local`. You can customize them if needed:

```env
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### Step 5: Add Clerk Keys to Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the same environment variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - All the Clerk URL variables

## 2. Supabase Database Setup

### Step 1: Get Your Supabase Keys
1. Go to your Supabase Dashboard: [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your **engage-portal** project
3. Go to **Settings** → **API**
4. Copy the following:
   - **Project URL** (under "Project URL")
   - **anon public** key (under "Project API keys")
   - **service_role** key (under "Project API keys" - keep this secret!)

### Step 2: Add Supabase Keys to Environment Variables
Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Step 3: Add Supabase Keys to Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the same environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

## 3. Database Password

Your Supabase database password is stored in `.supabase-password.txt` (already in `.gitignore`).

**Password:** `7qqcAF3KBM7NI4zxHeZk82BYT`

You'll need this if you want to connect directly to the database using a PostgreSQL client.

## 4. Testing Your Setup

### Local Development
1. Make sure all environment variables are set in `.env.local`
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000`

### Verify Clerk
- Try accessing a protected route (should redirect to sign-in)
- Test sign-up and sign-in flows

### Verify Supabase
- Check that you can create Supabase clients in your code
- Test database queries

## 5. Project Structure

```
engage-portal/
├── app/
│   ├── layout.tsx          # Root layout with ClerkProvider
│   └── page.tsx             # Home page
├── lib/
│   └── supabase/
│       ├── client.ts       # Browser Supabase client
│       └── server.ts       # Server Supabase client
├── middleware.ts            # Clerk authentication middleware
└── .env.local              # Environment variables (not in git)
```

## 6. Using Supabase in Your Code

### Client Component (Browser)
```typescript
import { createClient } from '@/lib/supabase/client'

export default function MyComponent() {
  const supabase = createClient()
  // Use supabase client
}
```

### Server Component
```typescript
import { createClient } from '@/lib/supabase/server'

export default async function MyServerComponent() {
  const supabase = await createClient()
  // Use supabase client
}
```

## 7. Using Clerk in Your Code

### Get Current User (Server)
```typescript
import { auth } from '@clerk/nextjs/server'

export default async function MyPage() {
  const { userId } = await auth()
  // Use userId
}
```

### Get Current User (Client)
```typescript
'use client'
import { useUser } from '@clerk/nextjs'

export default function MyComponent() {
  const { user } = useUser()
  // Use user
}
```

## Next Steps

1. ✅ Set up Clerk account and add keys
2. ✅ Get Supabase keys and add to environment
3. ✅ Add all keys to Vercel environment variables
4. Create authentication pages (sign-in, sign-up)
5. Set up database schema in Supabase
6. Build your application features

## Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

