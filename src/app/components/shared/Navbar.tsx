'use client'
import { Heart, ShoppingCart, User } from 'lucide-react'
import logo from '@/assets/plantfyLogo-removebg-preview.png'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Plants', href: '/plants' },
  { name: 'My Plants', href: '/my-plants' },
  { name: 'About', href: '/about' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav className='border-b border-gray-100 bg-[#f0fdf4] sticky top-0 z-50'>
      <div className='relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3'>
        {/* Logo + Nav Items */}
        <div className='flex items-center gap-8'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2'>
            {/* <Leaf size={27} strokeWidth={2} className='text-[#166534]' /> */}
            <Image src={logo} alt='Plantify Logo' className='h-8 w-24' />
            {/* <span className='text-xl font-bold text-[#0F5132]'>Plantify</span> */}
          </Link>

          {/* Nav Items */}
          <div className='hidden items-center gap-6 md:absolute md:left-1/2 md:flex md:-translate-x-1/2'>
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm md:text-base font-medium ${active ? ' text-green-500 ' : 'text-[#374151]'} transition  `}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Right Side Actions */}
        <div className='flex items-center gap-4'>
          {/* Wishlist */}
          <button
            type='button'
            aria-label='Wishlist'
            className='text-[#0F5132] transition hover:text-[#22C55E]'
          >
            <Heart size={22} strokeWidth={1.8} />
          </button>

          {/* Cart */}
          <button
            type='button'
            aria-label='Shopping cart'
            className='relative text-[#0F5132] transition hover:text-[#22C55E] cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          >
            <ShoppingCart size={23} strokeWidth={1.8} />

            <span className='cursor-pointer absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#22C55E] text-[10px] font-semibold text-white'>
              0
            </span>
          </button>

          {/* Profile */}
          <button
            type='button'
            aria-label='Profile'
            className='flex h-9 w-9 items-center justify-center rounded-full bg-[#0F5132] text-white transition hover:bg-[#166534] cursor-pointer'
          >
            <User size={19} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
