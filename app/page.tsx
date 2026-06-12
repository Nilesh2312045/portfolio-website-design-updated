import path from 'node:path'
import { readFile } from 'node:fs/promises'

export default async function Page() {
  const portfolioHtml = await readFile(path.join(process.cwd(), 'index.html'), 'utf8')

  return (
    <main className="h-screen w-full">
      <iframe
        title="Nilesh portfolio"
        srcDoc={portfolioHtml}
        className="h-full w-full border-0"
      />
    </main>
  )
}
