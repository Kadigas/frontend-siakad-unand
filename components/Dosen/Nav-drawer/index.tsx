import styles from './Nav-drawer.module.css'
import Link from 'next/link'

export default function Sidebar(){
    return (
        <div className={styles.navdrawer}>
            <div className='mx-5 text-lg'>
                <div className={styles.pages}>
                    <ul>
                        <li className='my-2 active'><Link href='#'>Home</Link></li>
                        <li className='my-2'><Link href='#'>Data Mahasiswa</Link></li>
                        <li className='my-2'><Link href='#'>Pengelolaan Nilai</Link></li>
                        <li className='my-2'><Link href='#'>Tugas Mahasiswa</Link></li>
                        <li className='my-2'><Link href='#'>Diskusi Bimbingan</Link></li>
                        <li className='my-2'><Link href='#'>Presensi Bimbingan</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}