'use client'
import Link from 'next/link'

import { LINE_URL, FACEBOOK_URL, PHONE, EMAIL, ADDRESS } from '@/app/lib/externalUrl'

export default function Footer() {
  return (
    <footer>
      <section className='main_container'>
        <div className='grid grid-cols-[1fr_auto] justify-between'>
          <h1 className='font-mono font-medium'>晉龍號海釣遊艇船隊</h1>
          <div className='grid grid-flow-col auto-cols-min gap-3 items-center'>
            <SocialMedia url={FACEBOOK_URL} iconClass='fa-brands fa-square-facebook text-[24px] text-[#3B5998]' />
            <SocialMedia url={LINE_URL} iconClass='fa-brands fa-line text-[20px] text-[#06C755]' />
          </div>
        </div>
        <div id='contact_info'>
          <ContactInfo contactInfo={PHONE} icon={'fa-solid fa-phone-volume'} />
          <ContactInfo contactInfo={EMAIL} icon={'fa-regular fa-envelope'} customized='hidden md:grid' />
          <ContactInfo contactInfo={ADDRESS} icon={'fa-solid fa-location-dot'} />
        </div>
      </section>
    </footer>
  )
}

interface ContactInfoProps {
  contactInfo: string
  icon: string
  customized?: string
}
const ContactInfo = ({ contactInfo, icon, customized }: ContactInfoProps) => (
  <div 
    className={'grid grid-cols-[auto_1fr] items-baseline gap-x-2 text-sm font-mono ' + (customized ?? '')}
  >
    <i className={icon}></i>
    <p>{contactInfo}</p>
  </div>
)

interface SocialMediaProps {
  url: string
  iconClass: string
}
const SocialMedia = ({ url, iconClass }: SocialMediaProps) => (
  <Link
    href={url}
    target='_blank'
  >
    <i className={iconClass}></i>
  </Link>
)