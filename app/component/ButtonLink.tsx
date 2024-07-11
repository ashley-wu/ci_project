import Link from 'next/link'

interface Props {
  title: string
  path: string
  icon?: string
  followLink?: boolean
}

export default function ButtonLink({ title, path, icon = 'fa-solid fa-arrow-right', followLink }: Props) {
  return (
    <Link
      href={path}
      className='px-6 py-3 font-medium bg-primary rounded-sm text-offwhite hover:bg-primary/80'
      target='_blank'
      rel={followLink ? '' : 'nofollow'}
    >
      {title}
      <i className={icon + ' ml-2'}></i>
    </Link>
  )
}