import PageTitle from '@/app/component/PageTitle'
import ButtonLink from '@/app/component/ButtonLink'
import { OFFSHORE_FISHING_RESERVATION_URL, FACEBOOK_URL } from '@/app/lib/externalUrl'
import { seasons, type Season } from '@/app/lib/season'
import { offshoreFishingMetadata } from '@/app/lib/metadata'
import { offshoreFishingJsonLd } from '@/app/lib/breadcrumb'

export const metadata = offshoreFishingMetadata

export default function OffshoreFishing() {
  return (
    <main>
      <section className='main_container'>
        <PageTitle title='海釣季節行程' />
        <div className='bg-white/70 shadow rounded-lg px-6 sm:px-8 py-8 w-[90%] max-w-[600px] mx-auto space-y-4 grid justify-center'>
          {seasons.map(season => <Season key={season.name} {...season} />)}
        </div>
        <section className='grid grid-flow-col justify-center gap-x-9 pt-[60px]'>
          <ButtonLink title='海釣體驗預約' path={OFFSHORE_FISHING_RESERVATION_URL} />
          <ButtonLink title='專業海釣預約' path={FACEBOOK_URL} />
        </section>
      </section>
      <script
        type='application/json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offshoreFishingJsonLd) }}
      />
    </main>
  )
}

const Season = ({ name, duration, icon = 'fa-solid fa-fish-fins' }: Season & { icon?: string }) => {
  return (
    <div className='font-mono font-medium text-primary grid grid-cols-[auto_68px_1fr] gap-x-3 sm:gap-x-6 items-baseline'>
      <i className={icon}></i>
      <div className='justify-self-end'>
        <span>{duration}</span>
        <span className='pl-1'>月</span>
      </div>
      <div>{name}</div>
    </div>
  )
}