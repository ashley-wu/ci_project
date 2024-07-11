import type { Metadata } from 'next'

import { BASE_URL, PATH } from '@/app/lib/path'

export const indexMetadata: Metadata = {
  title: {
    default: '晉龍號遊艇船隊', template: '%s | 晉龍號遊艇船隊'
  },
  description: '晉龍號遊艇船隊｜JinLong Yacht',
  openGraph: {
    type: 'website',
    siteName: '晉龍號遊艇船隊｜JinLong Yacht',
    url: BASE_URL,
    title: '晉龍號遊艇船隊｜JinLong Yacht',
    description: '晉龍號遊艇船隊｜JinLong Yacht',
    // locale: 'zh-Hant-TW',
  },
  robots: 'index, follow'
}

export const keelungIsletMetadata: Metadata = {
  title: '探索基隆嶼',
  description: '晉龍號遊艇船隊｜JinLong Yacht 基隆嶼登島／探索基隆嶼／基隆嶼觀光',
  openGraph: {
    type: 'website',
    siteName: '晉龍號遊艇船隊｜JinLong Yacht',
    url: BASE_URL + PATH.keelungIslet,
    title: '探索基隆嶼 | 晉龍號遊艇船隊',
    description: '探索基隆嶼 | 晉龍號遊艇船隊'
  }
}

export const offshoreFishingMetadata: Metadata = {
  title: '海釣行程',
  description: '晉龍號遊艇船隊｜JinLong Yacht 專業海釣／海釣體驗／新手海釣',
  openGraph: {
    type: 'website',
    siteName: '晉龍號遊艇船隊 | JinLong Yacht',
    url: BASE_URL + PATH.offshoreFishing,
    title: '海釣行程 | 晉龍號遊艇船隊',
    description: '海釣行程 | 晉龍號遊艇船隊'
  }
}