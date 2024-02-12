import CreateShortUrls from '@/app/createPublic'
import { db } from '@/lib/db'
import { shortUrls  } from '@/lib/db/schema'
import { count, isNotNull, isNull } from 'drizzle-orm'
import { Anchor, ArrowDown, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 60

export default async function Page() {
  const getShortUrlsCount = (
    await db
      .select({ value: count() })
      .from(shortUrls)
      .where(isNotNull(shortUrls.userId))
  )[0].value
  const getPublicShortUrlsCount = (
    await db
      .select({ value: count() })
      .from(shortUrls)
      .where(isNull(shortUrls.userId))
  )[0].value

  return (
    <main className="container flex max-w-screen-md flex-col items-center px-5">
      <section className="space-y-6 pb-48 pt-12 lg:py-32">
        <div className="flex w-full max-w-[64rem] flex-col items-center gap-4 text-center">

          <h1 className="font-heading max-w-md text-3xl sm:text-4xl">
            <span className="font-mono font-semibold">
              {process.env.NEXT_PUBLIC_APP_URL?.split('://')[1]}
            </span>{' '}
            URL shortener
          </h1>

          <CreateShortUrls />

          <div className="mt-3 flex space-x-4">
            <Link
              href="/x"
              className="flex h-10 items-center rounded-md bg-blue-500 px-8 text-sm text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* 
        // ~ Some stats
      */}
      <div className="mb-20 grid grid-cols-1 gap-4 text-black">
        <h3 className="col-span-2 flex items-center justify-center text-xl font-medium text-blue-500">
          <ArrowDown className="text-blue-200" />
          <span className="ml-1 text-blue-500">Some Stats</span>
          <ArrowDown className="text-blue-300" />
        </h3>

        <div className="col-span-2 flex flex-col items-center space-y-1 rounded-md border-2 border-blue-400 bg-blue-100 px-8 py-3">
          <Anchor className="h-8 w-8 text-blue-600" />
          <p className="text-xs">Total Short Links</p>
          <p>{getShortUrlsCount}</p>
        </div>
        {(process.env.NEXT_PUBLIC_UMAMI_URL ||
          process.env.NODE_ENV === 'development') && (
          <Link
            className="col-span-2 flex flex-col items-center space-y-1 rounded-md border-2 border-red-400 bg-red-100 px-8 py-2"
            href={
              `${process.env.NEXT_PUBLIC_UMAMI_SHARE_URL}` || 'https://umami.is'
            }
            target="_blank"
          >
            <p className="flex gap-1 text-xs">
              Optional Analytics by{' '}
              <svg
                className="h-5 w-5 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 428 389.11"
              >
                <g data-name="Layer 2">
                  <g data-name="Layer 4">
                    <circle
                      cx="214.15"
                      cy="181"
                      r="171"
                      fill="#fff"
                      stroke="#000"
                      strokeMiterlimit="10"
                      strokeWidth="20"
                    ></circle>
                    <path d="M413 134.11H15.29a15 15 0 0 0-15 15v15.3C.12 168 0 171.52 0 175.11c0 118.19 95.81 214 214 214 116.4 0 211.1-92.94 213.93-208.67 0-.44.07-.88.07-1.33v-30a15 15 0 0 0-15-15z"></path>
                  </g>
                </g>
              </svg>{' '}
              Umami
              <ExternalLink className="h-4 w-4 text-red-400" />
            </p>
          </Link>
        )}
      </div>

      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-[85%] text-xs leading-normal text-muted-foreground">
            {process.env.NEXT_PUBLIC_APP_URL} is open source and powered by open source software.
            The source code is available on{' '}
            <Link
              href="https://links.riq.my.id/github"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>

          <div className="mt-4 flex gap-2">
            <Link href="https://vercel.com" target="_blank">
              <Image
                src="/powered-by-vercel.svg"
                alt="Powered by Vercel"
                height={32}
                width={128}
              />
            </Link>

            {(process.env.NEXT_PUBLIC_UMAMI_URL ||
              process.env.NODE_ENV === 'development') && (
              <Link
                className="flex h-[26.56px] items-center gap-2 rounded-sm bg-black px-2 text-[0.6rem] text-background"
                href={
                  `${process.env.NEXT_PUBLIC_UMAMI_SHARE_URL}` ||
                  'https://umami.is'
                }
                target="_blank"
              >
                <svg
                  className="rounded-full border border-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 428 389.11"
                >
                  <g data-name="Layer 2">
                    <g data-name="Layer 4">
                      <circle
                        cx="214.15"
                        cy="181"
                        r="171"
                        fill="#fff"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeWidth="20"
                      ></circle>
                      <path d="M413 134.11H15.29a15 15 0 0 0-15 15v15.3C.12 168 0 171.52 0 175.11c0 118.19 95.81 214 214 214 116.4 0 211.1-92.94 213.93-208.67 0-.44.07-.88.07-1.33v-30a15 15 0 0 0-15-15z"></path>
                    </g>
                  </g>
                </svg>
                <p className="text-white">
                  Analytics by <span className="font-medium">Umami</span>
                </p>
              </Link>
            )}
          </div>

          <p className="text-xs">
            {getPublicShortUrlsCount} public links today.
            <br />
            Report abuse at this{' '}
            <Link
              className="border-b border-foreground/50"
              href="mailto:p@globalriq.eu.org"
            >
              email
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
