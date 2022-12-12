import Image from 'next/image'
import styles from '../../styles/Dashboard.module.css'
import Head from '../../components/Head'
import Nav from '../../components/Dosen/Nav'
import Navdrawer from '../../components/Dosen/Nav-drawer'
import Activities from '../../components/Dosen/Activities'
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