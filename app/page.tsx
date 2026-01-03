import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
          Engage Portal
        </h1>

        {userId ? (
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Welcome! You are signed in.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              User ID: {userId}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Get started by signing in to your account.
            </p>
            <div className="flex gap-4">
              <Link
                href="/sign-in"
                className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-500">
          <p>✅ Clerk Authentication configured</p>
          <p>✅ Supabase Database configured</p>
          <p>✅ Vercel Deployment ready</p>
        </div>
      </main>
    </div>
  )
}
