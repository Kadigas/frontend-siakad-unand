import styles from './Activities.module.css'
import Link from 'next/link'

export default function Activities(){
    return (
        <div className='basis-1/6 h-screen sticky top-0'>
            <div className={styles.activities}>
                <div className='mx-3 text-lg'>
                    <div className={styles.recent}>
                        <div className={styles.card}>
                            <h2 className='my-3 font-semibold text-xl'>Recent</h2>
                            <ul className='list-disc mx-2'>
                                <div className='my-2'>
                                    <li className='text-sm'>Accessed 2 days ago</li>
                                    <h3 className='font-semibold text-md'>Nilai Mahasiswa</h3>
                                </div>
                                <div className='my-2'>
                                    <li className='text-sm'>Accessed 3 days ago</li>
                                    <h3 className='font-semibold text-md'>Pembagian Modul Semester</h3>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles.card}>
                            <h2 className='my-3 font-semibold text-xl'>Timeline</h2>
                            <ul className='list-disc mx-2'>
                                <div className='my-2'>
                                    <li className='text-sm'>Deadline 21/06/2022</li>
                                    <h3 className='font-semibold text-md'>Modul 1: Tugas 2</h3>
                                </div>
                                <div className='my-2'>
                                    <li className='text-sm'>Deadline 23/06/2022</li>
                                    <h3 className='font-semibold text-md'>Modul 3: Tugas 1</h3>
                                </div>
                                <div className='my-2'>
                                    <li className='text-sm'>Deadline 01/07/2022</li>
                                    <h3 className='font-semibold text-md'>Modul 2: Tugas 1</h3>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.time}>
                        <h3>16:00</h3>
                        <h3>12/12/2022</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}