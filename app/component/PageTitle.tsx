interface Props {
  title: string
}

export default function PageTitle({ title }: Props) {
  return (
    <div className='text-primary mt-[24px] sm:mt-[36px] mb-[60px]'>
      <h2 className='font-medium text-2xl tracking-wider text-primary text-center pb-4'>{title}</h2>
      <hr className='w-[60px] mx-auto border-primary border-[1px]' />
    </div>
  )
}