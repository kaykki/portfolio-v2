import { Fredoka } from 'next/font/google';
import { Gabarito } from 'next/font/google';

const fredoka = Fredoka({
    weight: '300',
    variable: '--font-fredoka'
})

const gabarito = Gabarito({
    weight: '600',
    variable: '--font-gabarito'
})

export default { fredoka, gabarito };