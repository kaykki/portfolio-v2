import { Gabarito } from 'next/font/google';

const gabrito = Gabarito({
    weight: '600'
})

export default function Footer() {
    return <footer className={`${gabrito.className} my-0 mx-auto w-fit py-2 px-4 bg-primary text-secondary rounded-t-2xl`}><p>&copy; 2025 Kaki Kagatan</p></footer>
}