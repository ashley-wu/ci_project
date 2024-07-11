'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import PageTitle from '@/app/component/PageTitle'

interface Book {
  id: string
  title: string
  date: string
}

export default function BookEdit() {
  const searchParams = useSearchParams()
  const bookId = searchParams.get('id')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [book, setBook] = useState<Book | undefined>(undefined)
  const router = useRouter()

  useEffect(() => {
    const getBook = async () => {
      const res = await fetch(`/api/books/${bookId}`)
      const book = await res.json()
      setBook(book)
    }
    if (bookId) getBook()
  }, [bookId])

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')

    const res = await fetch(`/api/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, date }) 
    })
    const data = await res.json()

    if (res.ok) {
      router.back()
    } else {
      console.log('error')
      return
    }
  }

  const handleCancel = () => {
    console.log('from handleCancel')
    router.back()
  }

  return (
    <main>
      <section className='main_container'>
        <PageTitle title='Edit' />
        <section>
          {book ? 
          (
            <>
              <p className='text-gray-700 leading-7'>{book.title}</p>
              <p className='text-gray-700 leading-7'>{book.date}</p>
            </>
          ): (
            <p>Loading</p>
          )}
          <form onSubmit={(e) => handleEdit(e)}>
            <div className='flex items-center bg-gray-100 p-3 rounded-lg gap-4 my-6'>
              <label className='text-lg font-medium'>Title</label>
              <input 
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label className='text-lg font-medium'>Date</label>
              <input 
                type='text'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <section>
              <button
                type='button'
                className='border px-4 py-2 rounded-md bg-offwhite hover:bg-offwhite/40 mr-2'
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type='submit'
                className='border px-4 py-2 rounded-md text-offwhite bg-primary hover:bg-primary/60'
              >
                Submit
              </button>
            </section>
          </form>
        </section>
      </section>
    </main>
  )
}