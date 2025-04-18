import type { SiteConfig } from '~/types'

export function getSeo({
  title,
  description,
  author,
  keywords,
  site,
  ogImage,
}: SiteConfig) {
  return [
    {
      type: 'meta',
      props: { name: 'description', content: description },
    },
    { type: 'meta', props: { name: 'keywords', content: keywords } },
    { type: 'meta', props: { property: 'og:title', content: title } },
    {
      type: 'meta',
      props: { property: 'og:description', content: description },
    },
    {
      type: 'meta',
      props: { property: 'og:image', content: ogImage },
    },
    { type: 'meta', props: { property: 'og:type', content: 'website' } },
    {
      type: 'meta',
      props: { property: 'og:site_name', content: title },
    },
    {
      type: 'meta',
      props: { property: 'og:url', content: site },
    },

    {
      type: 'meta',
      props: { name: 'twitter:card', content: 'summary_large_image' },
    },
    { type: 'meta', props: { name: 'twitter:title', content: title } },
    {
      type: 'meta',
      props: { name: 'twitter:site', content: site },
    },
    {
      type: 'meta',
      props: { name: 'twitter:author', content: author },
    },

    { type: 'meta', props: { name: 'canonical', content: site } },
  ]
}
