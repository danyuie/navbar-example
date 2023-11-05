import Cart from '@/components/Cart'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[#101827]'>
      <Cart />
    </div>
  )
}