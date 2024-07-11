import PageTitle from '@/app/component/PageTitle'
import ButtonLink from '@/app/component/ButtonLink'
import { KEELUNG_ISLET_RESERVATION_URL } from '@/app/lib/externalUrl'
import { keelungIsletMetadata } from '@/app/lib/metadata'
import { keelungIsletJsonLd } from '@/app/lib/breadcrumb'
import { courses, type Course, type Plan } from '@/app/lib/course'

export const metadata = keelungIsletMetadata

export default function KeelungIslet() {
  return (
    <main>
      <section className='main_container'>
        <PageTitle title='探索基隆嶼' />
        <section id='courses'>
          {courses.map(course => <Course key={course.courseTitle} {...course} />)}
        </section>
        <section className='grid justify-center pt-[60px]'>
          <ButtonLink title='秘境基隆嶼登島行程預約' path={KEELUNG_ISLET_RESERVATION_URL} />
        </section>
      </section>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(keelungIsletJsonLd) }}
      />
    </main>
  )
}

const Course = ({ courseTitle, hours, coverage, plans }: Course) => {
  return (
    <div className='bg-white/70 shadow rounded-lg px-6 sm:px-8 py-8 w-full max-w-[360px]'>
      <div className='grid grid-cols-[1fr_auto] justify-betwenn items-end'>
        <div className='text-primary font-medium font-mono text-xl'>{courseTitle}</div>
        <div className='font-mono'>
          <span>{hours}</span>
          <span className='pl-2'>{'小時'}</span>
        </div>
      </div>
      <div className='grid justify-center font-mono py-7 font-medium text-primary'>
        {coverage}
      </div>
      <div>
        <div className='divider'>行程費用</div>
        <div className='grid justify-center gap-y-4 pt-4'>
          {plans.map(plan => <Plan key={plan.name} {...plan} />)}
        </div>
      </div>
    </div>
  )
}

const Plan = ({ name, fare }: Plan) => {
  return (
    <div className='grid grid-cols-[80px_60px_40px] gap-x-2'>
      <div>{name}</div>
      <div className='font-mono justify-self-end'>{fare}</div>
      <div className='font-mono'>{`/人`}</div>
    </div>
  )
}