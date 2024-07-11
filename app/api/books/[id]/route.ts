import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface RequestParams {
  params: {
    id: string
  }
}

export async function GET(req: Request, { params: { id }}: RequestParams) {
  const book = await prisma.book.findUnique({ where: { id }})

  return NextResponse.json(book, { status: 200 })
}

export async function PATCH(req: Request, { params: { id }}: RequestParams) {
  const { title, date } = await req.json()
  const book = await prisma.book.update({ where: { id }, data: { title, date }})

  return NextResponse.json(book, { status: 200 })
}

export async function DELETE(req: Request, { params: { id }}: RequestParams) {
  const book = await prisma.book.delete({ where: { id }})
  // console.log('from delete route', book)

  return NextResponse.json(book, { status: 200 })
}