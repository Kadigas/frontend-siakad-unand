import styles from './Nav-drawer.module.css'
import Link from 'next/link'

export default function Navdrawer(){
    return (
        <div className={styles.navdrawer}>
            <div className='mx-5 text-lg'>
                <div className={styles.pages}>
                    <ul>
                        <li className='my-2 active'><Link href='#'>Home</Link></li>
                        <li className='my-2'><Link href='#'>Profile</Link></li>
                        <li className='my-2'><Link href='#'>Tugas</Link></li>
                        <li className='my-2'><Link href='#'>Log Book</Link></li>
                        <li className='my-2'><Link href='#'>Presensi</Link></li>
                    </ul>
                </div>
                <div className={styles.module}>
                    <p className='my-2 font-semibold text-2xl'>MODUL</p>
                    <ul>
                        <li className='my-2'><Link href='#'>Modul 1</Link></li>
                        <li className='my-2'><Link href='#'>Modul 2</Link></li>
                        <li className='my-2'><Link href='#'>Modul 3</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}