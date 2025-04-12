import { useLocation } from 'preact-iso'
import { cn } from '~/lib/utils'

export default function Header() {
  const { url } = useLocation()

  const getClasses = (path: string) => {
    return cn(path === url && 'underline')
  }

  return (
    <header className="mx-auto w-full max-w-7xl px-6 py-4">
      <nav className="flex items-center justify-end gap-4">
        <a href="/" className={getClasses('/')}>
          Home
        </a>
        <a href="/404" class={getClasses('/404')}>
          404
        </a>
      </nav>
    </header>
  )
}
