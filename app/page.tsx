import path from 'node:path'
import { readFile } from 'node:fs/promises'
import { cache } from 'react'

const getPortfolioHtml = cache(async () =>
  readFile(path.join(process.cwd(), 'index.html'), 'utf8')
)

export default async function Page() {
  try {
    const portfolioHtml = await getPortfolioHtml()

    return (
      <main className="h-screen w-full">
        <iframe
          title="Interactive RPG-style portfolio showcase"
          aria-label="Interactive RPG-style portfolio showcase"
          srcDoc={portfolioHtml}
          sandbox="allow-scripts allow-forms"
          className="h-full w-full border-0"
        />
      </main>
    )
  } catch {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-neutral-100">
        Unable to load portfolio content.
      </main>
    )
  }
}
