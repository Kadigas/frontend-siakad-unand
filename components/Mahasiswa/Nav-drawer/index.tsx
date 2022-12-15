import styles from './Nav-drawer.module.css'
import Link from 'next/link'

export default function Navdrawer(){
    return (
        <div className='basis-1/6 h-screen sticky top-0'>
            <div className={styles.navdrawer}>
                <div className='mx-5 text-lg'>
                    <div className={styles.pages}>
                        <ul>
                            <li className='my-2 active'><Link href='/mahasiswa'><i className='fa fa-home mx-2'></i>Home</Link></li>
                            <li className='my-2'><Link href='/mahasiswa/profile'><i className='fa fa-user mx-2'></i>Profile</Link></li>
                            <li className='my-2'><Link href='/mahasiswa/tugas'><i className='fa fa-file-o mx-2'></i>Tugas</Link></li>
                            <li className='my-2'><Link href='/mahasiswa/logbook'><i className='fa fa-address-book mx-2'></i>Log Book</Link></li>
                            <li className='my-2'><Link href='/mahasiswa/presensi'><i className='fa fa-check-square-o mx-2'></i>Presensi</Link></li>
                        </ul>
                    </div>
                    <div className={styles.module}>
                        <p className='my-2 font-semibold text-2xl'>MODUL</p>
                        <ul>
                            <li className='my-2'><Link href='/mahasiswa/modul/01'>Modul 1</Link></li>
                            <li className='my-2'><Link href='/mahasiswa/modul/02'>Modul 2</Link></li>
                            <li className='my-2'><Link href='/mahasiswa/modul/03'>Modul 3</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}