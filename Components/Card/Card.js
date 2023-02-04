import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
    return (
        <Link href={`/details`}>
            <div
            style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 0px 159%)'
            }}
            className='w-[235px] rounded-md h-[305px] m-2 bg-white'>

                <Image src={`/images/010.png`} width={215} height={215}></Image>
            </div>

        </Link>
    )
}

export default Card;