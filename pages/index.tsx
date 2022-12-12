import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from "../components/Head"
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <div>
          <div className={styles.title}>
            <h1>SIAKAD UNAND</h1>
            <h3>Sistem Akademik Universitas Andalas</h3>
          </div>
          <div className={styles.grid}>
            <a href="/mahasiswa/login" className="text-2xl mx-2 h-12 px-6 py-1 font-semibold text-green-100 transition-colors duration-150 bg-green-600 rounded-lg focus:shadow-outline hover:bg-green-800">
              <h2>Masuk untuk Mahasiswa &rarr;</h2>
            </a>

            <a href="/dosen/login" className="text-2xl mx-2 h-12 px-6 py-1 text-yellow-700 transition-colors duration-150 border font-semibold border-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-500 hover:text-yellow-100">
              <h2>Masuk untuk Dosen &rarr;</h2>
            </a>
          </div>
        </div>
        <span className='flex flex-row-reverse'>
            <Image src="/logo.png" alt="Logo Unand" width={550} height={550} className='flex flex-row-reverse'/>
        </span>
      </main>


      <Footer />
    </div>
  )
}
