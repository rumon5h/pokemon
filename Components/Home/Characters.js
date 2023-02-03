import Image from 'next/image';
import React from 'react'
import styles from '../../src/styles/Characters.module.css';

const Characters = () => {
    return (
        <div>
            <div className={styles.bg}>
                <div className='mx-auto w-[fit-content] pt-[64px]'>
                    <Image src='/images/Logo.png' width={265} height={96}></Image>
                </div>
               
            </div>
            <div>
               
            </div>
        </div>
    )
}

export default Characters;