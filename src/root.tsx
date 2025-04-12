import { LocationProvider, hydrate, prerender as ssr } from 'preact-iso'
import '~/styles/fonts.css'
import '~/styles/global.css'
import Footer from '~/components/layout/footer'
import Header from '~/components/layout/header'
import DefaultRouter from '~/router'
import { config } from './config'
import { getSeo } from './lib/seo'

export function App() {
  return (
    <LocationProvider>
      <div className="flex min-h-dvh w-full flex-col">
        <Header />
        <main className="flex-1">
          <DefaultRouter />
        </main>
        <Footer />
      </div>
    </LocationProvider>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

// biome-ignore lint/suspicious/noExplicitAny: prerender vite preset
export async function prerender(data: any) {
  const { html, links } = await ssr(<App {...data} />)
  const metas = new Set(getSeo(config))

  return {
    html,
    links,
    head: {
      title: config.title,
      elements: metas,
    },
  }
}
