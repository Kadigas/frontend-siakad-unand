import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/Dashboard.module.css'
import Head from '../../../components/Head'
import Nav from '../../../components/Mahasiswa/Nav'
import Navdrawer from '../../../components/Mahasiswa/Nav-drawer'
import Activities from '../../../components/Mahasiswa/Activities'
import Footer from '../../../components/Footer'

export default function Tugas() {
  return (
    <div className={styles.container}>
      <Head />
      <Nav />

      <div className='flex flex-row'>
        <Navdrawer />
        <div className='basis-4/6 mt-12'>
          <div className='flex flex-row justify-center mt-12'>
            <Image src="/Tugas.png" alt="Home" width={800} height={800} className='mt-4'/>
          </div>
          <div className='flex flex-row justify-center my-2'>
            <div className={styles.card}>
              <h1 className='text-2xl font-bold text-left mb-2'>Tugas Ongoing</h1>
              <ul className='list-disc mx-2 my-2 divide-y-4 divide-solid'>
                <li className='my-5'>
                    <a href='/mahasiswa/modul/01/tugas/2'><h1 className='font-semibold text-lg'>Modul 1: Tugas 2</h1></a>
                    <h2>Deadline 21/06/2022</h2>
                </li>
                <li className='my-5'>
                    <a href='/mahasiswa/modul/03/tugas/1'><h1 className='font-semibold text-lg'>Modul 3: Tugas 1</h1></a>
                    <h2>Deadline 23/06/2022</h2>
                </li>
                <li className='my-5'>
                    <a href='/mahasiswa/modul/02/tugas/1'><h1 className='font-semibold text-lg'>Modul 2: Tugas 1</h1></a>
                    <h2>Deadline 01/07/2022</h2>
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
        <Activities />
      </div>
    </div>
  )
}
