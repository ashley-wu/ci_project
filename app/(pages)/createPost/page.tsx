'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

import PageTitle from '@/app/component/PageTitle'

export default function CreatePost() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!title || !date) return
    e.preventDefault()

    const res = await fetch('/api/create-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, date })
    })
    console.log('res', res)

    if (res.ok) {
      setTitle('')
      setDate('')
      router.push('/books')
    } else {
      console.log(res)
    }

  }

  return (
    <main>
      <section className='main_container'>
        <PageTitle title='新增' />
        <section>
          <form 
            className='flex flex-col gap-3 items-center rounded-lg shadow-xl border border-gray-500 max-w-lg mx-auto p-4'
            onSubmit={handleSubmit}
          >
            <label className='font-semibold'>Book Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-gray-500 border rounded-md' />

            <label className='font-semibold'>Book Publishing Date</label>
            <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className='border-gray-500 border rounded-md' />

            <button type='submit' className='bg-primary text-white p-2 rounded-lg hover:bg-primary/90'>Submit</button>
          </form>
        </section>
        <button onClick={() => router.push('/books')} className='text-primary leading-7 mt-4 underline hover:text-primary/90'>BACK</button> 
      </section>
    </main>
  )
}