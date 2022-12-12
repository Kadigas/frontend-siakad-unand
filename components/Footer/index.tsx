import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div>
                <Image src="/unand-emas2-small.png" alt="Logo Unand" width={225} height={225} />
                <Image src="/kedjajaran_bangsa.png" alt="Logo Unand" width={225} height={225} />
            </div>
            <div>
                <p>Limau Manis | Pauh | Padang</p>
                <p>Kampus Universitas Andalas</p>
                <p>Phone: (0751) 71181</p>
                <p>25175</p>
            </div>
            <div>
                <p className='mb-5'>Follow Us:</p>
                <div className='flex flex-row'>
                    <a href="#" className='mx-3 hover:opacity-50'><i className='fa fa-facebook'></i></a>
                    <a href="#" className='mx-3 hover:opacity-50'><i className='fa fa-instagram'></i></a>
                    <a href="#" className='mx-3 hover:opacity-50'><i className='fa fa-twitter'></i></a>
                </div>
            </div>
        </footer>
    )
}