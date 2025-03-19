import Link from 'next/link'
import Image from 'next/image'

export default function Header(title: string) {
    return (
        <header className='flex flex-row items-center gap-2'>
            <Link href={"/"}>
                <Image src='/logo.svg' alt="logo" width={36} height={43} />
            </Link>
            <h1>{title}</h1>
        </header>
    );
}