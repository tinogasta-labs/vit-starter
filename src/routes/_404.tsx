import { IconArrow } from '~/components/ui/icon'

export default function NotFoundRoute() {
  return (
    <section className="mx-auto flex max-w-7xl flex-1 flex-col items-center px-6 py-40">
      <span className="text-indigo-700">404</span>
      <h1 className="text-center text-3xl leading-tight font-medium text-neutral-800 sm:text-5xl sm:leading-snug">
        Ups! Page Not Found
      </h1>
      <p className="mt-4 text-center">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <div className="mt-8">
        <a href="/" className="inline-flex items-center gap-2 underline">
          <IconArrow displayDirection="left" />
          Back to home
        </a>
      </div>
    </section>
  )
}
