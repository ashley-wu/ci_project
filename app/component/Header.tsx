'use client'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <section className='relative h-full'>
        <Image
          src={'/image/logo.png'}
          alt='JINLONG LOGO'
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </section>
    </header>
  )
}