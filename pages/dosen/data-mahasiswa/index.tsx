import Image from 'next/image'
import styles from '../../../styles/DashboardDosen.module.css'
import Head from '../../../components/Head'
import Nav from '../../../components/Dosen/Nav'
import Navdrawer from '../../../components/Dosen/Nav-drawer'
import Activities from '../../../components/Dosen/Activities'
import Footer from '../../../components/Footer'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head />
      <Nav />

      <div className='flex flex-row'>
        <Navdrawer />
        <div className='basis-4/6 mt-12 flex flex-col justify-between'>
          <div className='flex flex-row justify-center mt-12 mb-4'>
              <div className={styles.card2}>
                <h1 className='font-semibold text-xl mb-2'>Data Mahasiswa</h1>
              </div>
          </div>
          <Footer />
        </div>
        <Activities />
      </div>
    </div>
  )
}
