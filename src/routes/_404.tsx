import { IconArrow } from '~/components/ui/icon'

export default function NotFoundRoute() {
  return (
    <section className="mx-auto flex max-w-7xl flex-1 flex-col items-center px-6 py-40">
      <h1 className="text-3xl">404: Not Found</h1>
      <p className="mt-4">It's gone :(</p>
      <div className="mt-8">
        <a href="/" className="inline-flex items-center gap-2 underline">
          <IconArrow displayDirection="left" />
          Back to home
        </a>
      </div>
    </section>
  )
}
