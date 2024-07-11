'use client'
import { MouseEventHandler } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PATH } from '@/app/lib/path'

export default function Navigation() {
  const onOpenNavMenu = () => (document.getElementById('overlay_menu') as HTMLElement).style.width = '100%'

  return (
    <>
      <div
        className='fixed top-[24px] right-[28px] text-primary font-mono font-medium cursor-pointer'
        onClick={onOpenNavMenu}
      >
        <i className='fa-solid fa-ship text-2xl mr-3'></i>
        MENU
      </div>
      <NavMenu />
    </>
  )
}

const NavMenu = () => {
  const onCloseNavMenu = () => (document.getElementById('overlay_menu') as HTMLElement).style.width = '0%'

  return (
    <section id='overlay_menu'>
      <nav className='relative h-full grid justify-center items-center'>
        <ul className='space-y-6'>
          <NavLink title='晉龍號遊艇船隊' path={PATH.index} icon='fa-solid fa-anchor' onClick={onCloseNavMenu} />
          <NavLink title='探索基隆嶼' path={PATH.keelungIslet} icon='fa-solid fa-mountain-sun' onClick={onCloseNavMenu} />
          <NavLink title='海釣行程' path={PATH.offshoreFishing} icon='fa-solid fa-fish-fins' onClick={onCloseNavMenu} />
          <NavLink title='Books' path={'/books'} icon='fa-solid fa-fish-fins' onClick={onCloseNavMenu} />
        </ul>
        <i
          className='fa-solid fa-xmark text-2xl text-offwhite/90 hover:text-offwhite absolute top-9 left-9'
          onClick={onCloseNavMenu}
        >
        </i>
      </nav>
    </section>
  )
}

interface NavLinkProps {
  title: string
  path: string
  icon: string
  onClick: MouseEventHandler
}
const NavLink = ({ title, path, icon, onClick }: NavLinkProps) => {
  const pathname = usePathname()
  const linkClass = 
    'font-medium text-2xl' + 
    (pathname === path ? ' text-offwhite underline decoration-wavy underline-offset-[12px]' : ' text-offwhite/90 hover:text-offwhite')

  return (
    <li onClick={onClick}>
      <Link href={path} className={linkClass}>
        <i className={icon + ' mr-4'}></i>
        <span>{title}</span>
      </Link>
    </li>
  )
}