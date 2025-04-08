import { Link } from 'react-router'
import { Icon } from '~/components/ui/icon'

export default function NotFoundRoute() {
  return (
    <section className="mx-auto flex max-w-3xl flex-1 flex-col items-center py-40">
      <h1 className="text-2xl md:text-4xl">Not found page</h1>
      <p className="mt-2 text-neutral-600">
        Sorry, we have no content for this page yet.
      </p>
      <Link to="/" className="mt-6 inline-flex items-center gap-2">
        <Icon name="arrow-right" className="rotate-180" />
        Back to home
      </Link>
    </section>
  )
}
