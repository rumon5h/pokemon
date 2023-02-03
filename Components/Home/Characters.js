import Image from 'next/image';
import React from 'react'
import styles from '../../src/styles/Characters.module.css';

const Characters = () => {

    return (
        <div>
            <div className={styles.bg}>
                <div className='mx-auto w-[fit-content] pt-[64px]'>
                    <Image src='/images/Logo.png' alt='logo' priority width={265} height={96}></Image>
                </div>
                <div>
                    {

                    }
                </div>
            </div>
            <div>
                <div className={styles.brush}>
                    <h3 className='text-5xl font-bold text-center'>Ash & Pikachu Arrive in
                        Pokémon Universe</h3>
                </div>
               
            </div>
        </div>
    )
}

export default Characters;


