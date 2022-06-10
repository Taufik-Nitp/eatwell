import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle
} from 'react-icons/ai'

import {BsFillBagCheckFill} from 'react-icons/bs'

const Navbar = () => {
    const toggleCart=()=>{
         if(ref.current.classList.contains('translate-x-full')){
             ref.current.classList.remove('translate-x-full')
             ref.current.classList.add('translate-x-0')
         }else if(!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')

         }
    }
    const ref=useRef()
  return (
    <div className='flex flext-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md'>
      <div className='logo mx-2 '>
        <Link href={'/'}>
          <a>
            <Image
              src={'/../public/logo.png'}
              height={75}
              width={75}
              alt='logo not loaded'
            ></Image>
          </a>
        </Link>
      </div>
      <div className='nav'>
        <ul className='flex items-center space-x-4 font-bold md:text-xl'>
          <Link href={'/crispychickens'}>
            <a>
              {' '}
              <li>Crispy</li>
            </a>
          </Link>

          <Link href={'/burgers'}>
            <a>
              {' '}
              <li>Burgers</li>
            </a>
          </Link>
          <Link href={'/musttry'}>
            <a>
              {' '}
              <li>Must Try</li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className='cart cursor-pointer absolute right-0 mx-5 top-4'
      >
        <AiOutlineShoppingCart className='text-xl md:text-3xl'></AiOutlineShoppingCart>
      </div>
      <div
        ref={ref}
        className=' w-72 h-full sideCart absolute top-0 right-0 bg-red-100 px-8 py-10 transform transition-transform translate-x-full '
      >
        <h2 className='font-bold text-xl text-center '>Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className='absolute top-5 right-2 cursor-pointer text-2xl text-red-700'
        >
          <AiFillCloseCircle />
        </span>

        <ol className='list-decimal font-semibold'>
          <li>
            <div className='item flex my-5'>
              <div className='w-2/3 font-semibold'>tshirt wear the code</div>
              <div className=' flex font-semibold items-center justify-center w-1/3 text-lg'>
                <AiFillMinusCircle className='cursor-pointer text-red-500' />
                <span className='mx-2 text-sm'>2</span>
                <AiFillPlusCircle className='cursor-pointer text-red-500' />
              </div>
            </div>
          </li>
        </ol>
        <div className='flex'>
          <button className='flex mr-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm'>
            <BsFillBagCheckFill className='m-1' /> Checkout
          </button>
          <button className='flex mr-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm'>
            <BsFillBagCheckFill className='m-1' /> Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
