'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import PageTitle from '@/app/component/PageTitle'

interface Book {
  id: string
  title: string
  date: string
  checked: boolean
}

export default function Books() {
  const [books, setBooks] = useState<Book[]>([])
  const router = useRouter()

  useEffect(() => {
    const getBooks = async () => {
      const res = await fetch('/api/books', {
        cache: 'no-store'
      })
      const books = await res.json()
      setBooks(books)
    }
    getBooks()
  }, [])

  const handleCheck = (index: number) => {
    const updateBooks = [...books]
    updateBooks[index].checked = !updateBooks[index].checked
    setBooks(updateBooks)
  }

  const handleEdit = (book: Book) => {
    router.push(`/books/edit?id=${book.id}`)
  }

  const handleDelete = async (book: Book) => {
    const res = await fetch(`/api/books/${book.id}`, {
      method: 'DELETE',
    })

    const data = await res.json()
    // console.log('from books page', data)
    if (res.ok) {
      setBooks(books.filter(book => book.id !== data.id))
    } else {
      console.log('error')
    }
  }

  return (
    <main>
      <section className='main_container'>
        <PageTitle title='Book List' />
        <section>
          {books.length === 0 && <div className='text-primary font-medium text-center'>No books to show</div>}
          {books.map((book, index) => {
            return (
              <div key={book.id} className='flex bg-gray-100 p-3 rounded-lg gap-4 my-6'>
                <input type='checkbox' onClick={() => handleCheck(index)} />
                <div className='font-medium'>{book.title}</div>
                <div>{book.date}</div>

                <button 
                  className='text-xs text-red-600 leading-7 hover:text-red-600/90'
                  disabled={!book.checked}
                  onClick={() => handleDelete(book)}
                >
                  {book.checked ? 'Delete' : ''}
                </button>

                <button
                  className='text-xs text-primary leading-7 hover:text-primary/90'
                  disabled={!book.checked}
                  onClick={() => handleEdit(book)}
                >
                  {book.checked ? 'Edit' : ''}
                </button>
              </div>
            )
          })}
        </section>
        <section>
          <button 
            className='text-primary font-medium p-2'
            onClick={() => router.push('/createPost')}
          >
            Create
          </button>
        </section>
      </section>
    </main>
  )
}