import { IconArrow } from '~/components/ui/icon'

export default function HomeRoute() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <section className="mx-auto flex max-w-3xl flex-1 flex-col items-center py-40">
        <span className="text-indigo-700">Vit Starter</span>
        <h1 className="text-center text-3xl leading-tight text-neutral-800 sm:text-5xl sm:leading-snug">
          Starting Point for Scalable <br className="hidden md:block" />
          Web Projects
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600 sm:text-lg">
          Kickstart modern web apps with a fast, scalable, and type-safe
          development setup.
        </p>
        <div className="mt-8">
          <a
            href="https://github.com/tinogasta-labs/vit-starter"
            className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-md bg-neutral-950 px-6 text-sm font-medium text-neutral-50"
          >
            Get Started
            <IconArrow displayDirection="right" className="-mr-2" />
          </a>
        </div>
      </section>
    </div>
  )
}
