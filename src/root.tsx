import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import HomeRoute from '~/routes/home'
import NotFoundRoute from './routes/not-found.tsx'

function Layout() {
  return (
    <>
      <div className="flex min-h-screen flex-col p-4">
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="py-12 text-center font-light">
          <p className="text-neutral-600">
            by{' '}
            <a
              target="_blank"
              href="https://github.com/tinogasta-labs"
              rel="noreferrer noopener"
            >
              Tinogasta Labs
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

function AppWithProviders() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomeRoute />} />
          <Route path="*" element={<NotFoundRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default function App() {
  return <AppWithProviders />
}
