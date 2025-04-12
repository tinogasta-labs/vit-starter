import { LocationProvider, hydrate, prerender as ssr } from 'preact-iso'

import '~/styles/global.css'
import Header from '~/components/layout/header'
import DefaultRouter from '~/router'

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <DefaultRouter />
      </main>
    </LocationProvider>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

// biome-ignore lint/suspicious/noExplicitAny: prerender vite preset
export async function prerender(data: any) {
  return await ssr(<App {...data} />)
}
