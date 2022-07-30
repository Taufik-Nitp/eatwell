import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
  
} from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import { BsFillBagCheckFill } from 'react-icons/bs'

const Navbar = ({ logout, user,cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const [dropdown, setDropdown] = useState(false)
  // const toggleDropdown= ()=>{
  //       setDropdown(!dropdown)
  // }
  const ref = useRef()
  return (
    <div className='flex flext-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10'>
      <div className='logo mx-5 '>
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
      <div className='cart cursor-pointer item-center absolute right-0 mx-5 top-4 flex'>
        <a
          onMouseOver={() => {
            setDropdown(true)
          }}
          onMouseLeave={() => {
            setDropdown(false)
          }}
        >
          {dropdown && (
            <div className='absolute right-11 top-7 bg-red-500 rounded-md px-2 text-white '>
              <ul>
                <li className='py-1 text-sm hover:text-slate-900'>Account</li>
                <li className='py-1 text-sm hover:text-slate-900'>Orders</li>
                <a onClick={logout}>
                  <li className='py-1 text-sm hover:text-slate-900'>Logout</li>
                </a>
              </ul>
            </div>
          )}
          {user.value && <MdAccountCircle className='text-xl md:text-3xl' />}
        </a>
        {!user.value && (
          <Link href={'/login'}>
            <a>
              <button className='bg-red-600 py-2 px-2 rounded-md text-white text-sm mx-2'>
                Login
              </button>
            </a>
          </Link>
        )}
        <AiOutlineShoppingCart
          onClick={toggleCart}
          className='text-xl md:text-3xl'
        ></AiOutlineShoppingCart>
      </div>

      <div
        ref={ref}
        className={` w-72 h-[100vh] sideCart absolute top-0 right-0 bg-red-100 px-8 py-10 transform transition-transform ${
          Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h2 className='font-bold text-xl text-center '>Food Cart</h2>
        <span
          onClick={toggleCart}
          className='absolute top-5 right-2 cursor-pointer text-2xl text-red-700'
        >
          <AiFillCloseCircle />
        </span>

        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && (
            <div className='my-4 font-normal '> Cart is Empty!!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className='item flex my-5'>
                  <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                  <div className=' flex font-semibold items-center justify-center w-1/3 text-lg'>
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(k, 1, cart[k].price, cart[k].name)
                      }}
                      className='cursor-pointer text-red-500'
                    />
                    <span className='mx-2 text-sm'>{cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(k, 1, cart[k].price, cart[k].name)
                      }}
                      className='cursor-pointer text-red-500'
                    />
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
        <div className='flex'>
          <Link href={'/checkout'}>
            <button className='flex mr-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm'>
              <BsFillBagCheckFill className='m-1' /> Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className='flex mr-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm'
          >
            <BsFillBagCheckFill className='m-1' /> Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
