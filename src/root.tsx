import { LocationProvider, hydrate, prerender as ssr } from 'preact-iso'

import '~/styles/global.css'
import DefaultRouter from '~/router'
import Header from '~/components/layout/header'

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

export async function prerender(data: any) {
  return await ssr(<App {...data} />)
}
