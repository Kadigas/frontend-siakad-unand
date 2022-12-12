import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav(){
    return (
        <header className='bg-gray-200 mt-0 fixed w-full z-10 top-0 flex flex-row text-lg'>
          <div className='bg-black basis-1/6'>
            <Image src="/unand-emas2-small.png" alt="Logo Unand" width={180} height={180} className='flex flex-row justify-center m-5'/>
          </div>
          <div className='basis-5/6 flex flex-row justify-between items-center'>
            <div className='basis-1/6 mx-5'>
              <a href='#' className='font-semibold'>Panduan User</a>
            </div>
            <div className='basis-5/6 mx-5 flex flex-row justify-end'>
              <span className='font-semibold'>Nopal Pardede</span>
              <span className='fa fa-user-circle-o'></span>
            </div>
          </div>
      </header>
    )
}