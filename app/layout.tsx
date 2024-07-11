import './main.css'
import { noto_sans_tc, noto_sans_mono } from '@/app/lib/font'
import { indexMetadata } from '@/app/lib/metadata'

import Header from '@/app/component/Header'
import Footer from '@/app/component/Footer'
import Navigation from '@/app/component/Navigation'

export const metadata = indexMetadata

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang='zh-Hant-TW' className={`${noto_sans_tc.variable} ${noto_sans_mono.variable}`}>
      <body>
        <main id='app_container'>
          <Header />
          <Navigation />
          {children}
          <Footer />
        </main> 
      </body>
    </html>
  );
}
