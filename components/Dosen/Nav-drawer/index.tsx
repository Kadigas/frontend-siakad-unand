import styles from './Nav-drawer.module.css'
import Link from 'next/link'

export default function Navdrawer(){
    return (
        <div className='basis-1/6 h-screen sticky top-0'>
            <div className={styles.navdrawer}>
                <div className='mx-5 text-lg'>
                    <div className={styles.pages}>
                        <ul>
                            <li className='my-2 active'><Link href='/dosen'><i className='fa fa-home mx-2'></i>Home</Link></li>
                            <li className='my-2'><Link href='/dosen/profile'><i className='fa fa-user mx-2'></i>Profile</Link></li>
                            <li className='my-2'><Link href='/dosen/data-mahasiswa'><i className='fa fa-file-o mx-2'></i>Data Mahasiswa</Link></li>
                            <li className='my-2'><Link href='/dosen/pengelolaan-nilai'><i className='fa fa-address-book mx-2'></i>Pengelolaan Nilaik</Link></li>
                            <li className='my-2'><Link href='/dosen/tugas-mahasiswa'><i className='fa fa-check-square-o mx-2'></i>Tugas Mahasiswa</Link></li>
                            <li className='my-2'><Link href='/dosen/diskusi-bimbingan'><i className='fa fa-check-square-o mx-2'></i>Diskusi Bimbingan</Link></li>
                            <li className='my-2'><Link href='/dosen/presensi-bimbingan'><i className='fa fa-check-square-o mx-2'></i>Presensi Bimbingan</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}