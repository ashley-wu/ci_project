import { BASE_URL, PATH } from '@/app/lib/path'

const index = {
  '@type': 'ListItem',
  'position': 1,
  'name': '晉龍號遊艇船隊',
  'item': BASE_URL
}

const keelungIslet = {
  '@type': 'ListItem',
  'position': 2,
  'name': '探索基隆嶼',
  'item': `${BASE_URL}${PATH.keelungIslet}`
}

const offshoreFishing = {
  '@type': 'ListItem',
  'position': 2,
  'name': '海釣行程',
  'item': `${BASE_URL}${PATH.offshoreFishing}`
}

export const indexJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    index
  ]
}

export const keelungIsletJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    index, keelungIslet
  ]
}

export const offshoreFishingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    index, offshoreFishing
  ]
}