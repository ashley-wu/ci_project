import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const body = await req.json()
  const { title, date } = body

  const post = await prisma.book.create({
    data: { 
      title, 
      date
    }
  })

  console.log('route', post)

  return NextResponse.json(post, { status: 201 })
}