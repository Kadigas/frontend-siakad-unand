import styles from '../../styles/Login.module.css'
import Link from 'next/link'
import Head from '../../components/Head'

export default function Login(){
    return (
        <div className={styles.container}>
            <Head />
            <div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Login</h1>
                    <form action="/mahasiswa" method='post' className='mx-8'>
                        <label htmlFor="sid" className={styles.placeholder}>Student ID: </label>
                        <input type="text" name="sid" placeholder="Enter your student ID..." size={54} className='mb-5 p-1'/>
                        <label htmlFor="pwd" className={styles.placeholder}>Password: </label>
                        <input type="password" name="pwd" placeholder="Password..." size={54} className='mb-5 p-1'/>
                        <div className='flex flex-row'>
                            <input type="submit" value="Masuk" name="masuk" className="transition duration-200 basis-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-5"/>
                        </div>
                        <div className='my-2'><Link href='/' className='text-black transition duration-200 hover:text-yellow-600'>Forgot password?</Link></div>
                    </form>
                </div>
                <div className='flex flex-row justify-center text-white'>
                    <p>© 2022 Universitas Andalas. v1.0.0</p>
                </div>
            </div>
        </div>
    )
}