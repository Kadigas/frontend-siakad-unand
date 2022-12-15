import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/Dashboard.module.css'
import Head from '../../../components/Head'
import Nav from '../../../components/Mahasiswa/Nav'
import Navdrawer from '../../../components/Mahasiswa/Nav-drawer'
import Activities from '../../../components/Mahasiswa/Activities'
import Footer from '../../../components/Footer'

export default function Logbook() {
  return (
    <div className={styles.container}>
      <Head />
      <Nav />

      <div className='flex flex-row'>
        <Navdrawer />
        <div className='basis-4/6 mt-12 flex flex-col justify-between'>
          <div className='flex flex-row justify-center mt-12'>
            <Image src="/Logbook.png" alt="Home" width={800} height={800} className='mt-4'/>
          </div>
          <div className='flex flex-row justify-center my-2'>
            <div className={styles.card}>
              <h1 className='text-2xl font-bold text-left mb-2'>Log book</h1>
              <ul className='mx-2 my-2 divide-y-4 divide-solid'>
                <li className='my-2'>
                    <a href='/mahasiswa'><h1 className='font-semibold text-lg'>Log Book Semester 1</h1></a>
                </li>
                <li className='my-2'>
                  <a href='/mahasiswa'><h1 className='font-semibold text-lg'>Log Book Semester 2</h1></a>
                </li>
              </ul>
              <div className='flex flex-col items-center'>
                <h3 className='text-red-500 my-4'>Anda belum mengumpulkan Log Book semester ini.</h3>
                <div>
                  <a href='#' className="bg-green-700 duration-150 text-white font-bold py-2 px-4 rounded">Submit Log Book</a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <Activities />
      </div>
    </div>
  )
}
