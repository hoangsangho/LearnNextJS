import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function AuthLayout({children}: Props) {
  return (
    <section>
      Auth Layout - Start
      {children}
      Auth Layout - end
    </section>
  )
}