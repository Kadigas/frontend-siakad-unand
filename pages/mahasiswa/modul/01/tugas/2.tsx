import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../../../styles/Dashboard.module.css'
import Head from '../../../../../components/Head'
import Nav from '../../../../../components/Mahasiswa/Nav'
import Navdrawer from '../../../../../components/Mahasiswa/Nav-drawer'
import Activities from '../../../../../components/Mahasiswa/Activities'
import Footer from '../../../../../components/Footer'

export default function Tugas() {
  return (
    <div className={styles.container}>
      <Head />
      <Nav />

      <div className='flex flex-row'>
        <Navdrawer />
        <div className='basis-4/6 mt-12 flex flex-col justify-between'>
            <span className='text-xl mt-12 ml-8 font-semibold hover:text-red-500 my-6'>
                <i className='fa fa-angle-double-left'><Link href="../"> Back</Link></i>
            </span>
          <div className='flex flex-col items-center'>
            <h2 className='text-3xl font-bold'>MODUL 1</h2>
            <h1 className='text-6xl font-bold'>TUGAS 2</h1>
          </div>
          <div className='flex flex-col items-center my-2'>
            <div className={styles.card}>
                <div className={styles.innercard}>
                    <h1 className='font-semibold text-xl mb-2'>Modul 1: Tugas 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='my-2 text-red-500'>Not Submitted</h1>
                    <a href='#' className="bg-blue-700 duration-150 text-white font-bold py-2 px-4 rounded">Submit Log Book</a>
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
