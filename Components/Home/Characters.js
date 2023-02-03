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
                <div className='grid rounded-md grid-cols-1 lg:grid-cols-2'>
                    <div className='shadow-md 	 flex p-5 m-2 rounded-md hover:bg-blue-500 hover:text-white transform-gpu'>
                        <p>Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque. Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit pretium lorem elementum. Iaculis sit maecenas sodales mi convallis justo aliquam. Tincidunt semper ut ornare vivamus lectus.</p>
                        <Image className='h-[200px] rounded-md' src='/images/Image01.png' width={200} height={200}></Image>
                    </div><div className='shadow-md 	 flex p-5 m-2 rounded-md hover:bg-blue-500 hover:text-white transform-gpu'>
                        <p>Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque. Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit pretium lorem elementum. Iaculis sit maecenas sodales mi convallis justo aliquam. Tincidunt semper ut ornare vivamus lectus.</p>
                        <Image className='h-[200px] rounded-md' src='/images/Image02.png' width={200} height={200}></Image>
                    </div><div className='shadow-md 	 flex p-5 m-2 rounded-md hover:bg-blue-500 hover:text-white transform-gpu'>
                        <p>Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque. Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit pretium lorem elementum. Iaculis sit maecenas sodales mi convallis justo aliquam. Tincidunt semper ut ornare vivamus lectus.</p>
                        <Image className='h-[200px] rounded-md' src='/images/Image03.png' width={200} height={200}></Image>
                    </div><div className='shadow-md 	 flex p-5 m-2 rounded-md hover:bg-blue-500 hover:text-white transform-gpu'>
                        <p>Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque. Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit pretium lorem elementum. Iaculis sit maecenas sodales mi convallis justo aliquam. Tincidunt semper ut ornare vivamus lectus.</p>
                        <Image className='h-[200px] rounded-md' src='/images/Image04.png' width={200} height={200}></Image>
                    </div><div className='shadow-md 	 flex p-5 m-2 rounded-md hover:bg-blue-500 hover:text-white transform-gpu'>
                        <p>Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque. Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit pretium lorem elementum. Iaculis sit maecenas sodales mi convallis justo aliquam. Tincidunt semper ut ornare vivamus lectus.</p>
                        <Image className='h-[200px] rounded-md' src='/images/Image05.png' width={200} height={200}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characters;


