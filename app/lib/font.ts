import { Noto_Sans_TC, Noto_Sans_Mono } from 'next/font/google'

export const noto_sans_tc = Noto_Sans_TC({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-noto-sans-tc',
  display: 'swap'
})

export const noto_sans_mono = Noto_Sans_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-noto-sans-mono',
  display: 'swap'
})