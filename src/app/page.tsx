import Link from "next/link"

export default function Home() {
  return (
    <main className="container w-full">
      <h1 className='font-bold'>main</h1>
      <Link href="/dashboard">to dashboard</Link>
    </main>
  )
}
