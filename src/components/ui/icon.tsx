import type { IconName } from '@/icon-name'
import type { SVGProps } from 'react'
import { cn } from '~/lib/utils.ts'

export function Icon({
  name,
  className,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName
}) {
  return (
    <svg {...props} className={cn('size-4', className)}>
      <title>{name}</title>
      <use href={`/images/sprite.svg#${name}`} />
    </svg>
  )
}
