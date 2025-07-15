"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

type Props = {
  className?: string
}

/**
 * Primary call-to-action section used at the end of many pages.
 */
export function CTASection({ className }: Props) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-700 py-16 sm:py-24",
        className,
      )}
    >
      <div className="mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="text-3xl font-bold sm:text-4xl">Ready to simplify payments?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg/7 text-emerald-100">
          Create an account in minutes and start accepting payments today.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
            Get started
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white bg-transparent">
            Talk to sales
          </Button>
        </div>
      </div>

      {/* Decorative blurred blob */}
      <Image
        src="/placeholder.svg?width=400&height=400"
        alt=""
        width={400}
        height={400}
        className="pointer-events-none absolute -bottom-40 right-0 opacity-30 blur-2xl"
        unoptimized
      />
    </section>
  )
}

// Default export as an alias so either import style works.
export default CTASection
// Also export the camel-cased alias many files used earlier.
export { CTASection as CtaSection }
