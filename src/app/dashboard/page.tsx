import React from 'react'
import Link from 'next/link'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
        <h1>DashBoard</h1>
        <Link href="/">back to home</Link>
    </div>
  )
}