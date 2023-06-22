import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className='bg-black text-blue-400'>HELLO</h1>
        <Link href='/login'>
           <button className='p-2 text-white bg-black rounded-full hover:text-blue-500'>Login</button>
           </Link>
       </div>
    </main>
  )
}
