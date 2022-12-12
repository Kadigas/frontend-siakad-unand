import Image from 'next/image'
import styles from '../../styles/Dashboard.module.css'
import Head from '../../components/Head'
import Nav from '../../components/Mahasiswa/Nav'
import Navdrawer from '../../components/Mahasiswa/Nav-drawer'
import Activities from '../../components/Mahasiswa/Activities'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <Nav />

      <div className='flex flex-row'>
        <div className='basis-1/6'>
          <Navdrawer />
        </div>
        <div className='basis-4/6'>

        </div>
        <div className='basis-1/6'>
          <Activities />
        </div>
      </div>
      <Footer />
    </div>
  )
}
