import Image from 'next/image'
import Link from 'next/link'
import NavPageBar from './Navigation/page'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavPageBar />
      <div>
        <h1>Noah Medoff</h1>
        <h2>
          Hello! Welcome to my personal professional website.
        </h2>
      </div>
    </main>
  )
}
