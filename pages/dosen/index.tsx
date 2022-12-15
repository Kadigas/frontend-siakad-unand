import Image from 'next/image'
import styles from '../../styles/DashboardDosen.module.css'
import Head from '../../components/Head'
import Nav from '../../components/Dosen/Nav'
import Navdrawer from '../../components/Dosen/Nav-drawer'
import Activities from '../../components/Dosen/Activities'
import Footer from '../../components/Footer'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head />
      <Nav />

      <div className='flex flex-row'>
        <Navdrawer />
        <div className='basis-4/6 mt-12 flex flex-col justify-between'>
          <div className='flex flex-row justify-center mt-12'>
            <Image src="/Home-dosen.png" alt="Home" width={800} height={800} className='mt-4'/>
          </div>
          <div className='flex flex-row justify-center my-2'>
            <div className={styles.card}>
              <h1 className='text-2xl font-bold text-left'>Announcement</h1>
              <div className={styles.innercard}>
                <h1 className='font-semibold text-xl mb-2'>Pengisian Nilai Modul 1: Tugas 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
