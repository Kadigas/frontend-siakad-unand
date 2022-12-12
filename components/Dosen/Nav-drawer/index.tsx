import styles from './Nav-drawer.module.css'
import Link from 'next/link'

export default function Navdrawer(){
    return (
        <div className={styles.navdrawer}>
            <div className='mx-5 text-lg'>
                <div className={styles.pages}>
                    <ul>
                        <li className='my-4 active'><Link href='#'>Home</Link></li>
                        <li className='my-4'><Link href='#'>Data Mahasiswa</Link></li>
                        <li className='my-4'><Link href='#'>Pengelolaan Nilai</Link></li>
                        <li className='my-4'><Link href='#'>Tugas Mahasiswa</Link></li>
                        <li className='my-4'><Link href='#'>Diskusi Bimbingan</Link></li>
                        <li className='my-4'><Link href='#'>Presensi Bimbingan</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}