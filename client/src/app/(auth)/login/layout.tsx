import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function LoginLayout({children}: Props) {
  return (
    <section className='ml-4'>
      Login Layout - start
      {children}
      Login Layout - end
    </section>
  )
}