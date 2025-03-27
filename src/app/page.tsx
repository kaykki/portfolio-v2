import Image from 'next/image';
import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';
import { Gabarito } from 'next/font/google';
import Links from '@/components/Links';

const gabrito = Gabarito({
	weight: '600'
})

export default function Home() {
	return (
		<main className='my-4 mx-auto w-[358px] grid grid-cols-[auto_auto] grid-rows-[74px_58px_57px_auto_auto] gap-4'>

			{/* Header Component */}
			{Header("Kaki Kagatan")}

			{/* Portrait Image */}
			<Image src='/portrait.jpg' alt='Portrait of Kaki Kagatan' width={139.34} height={148} className='rounded-2xl shadow-md order-2 row-span-2' />

			{/* Description */}
			<section className='card order-3 row-span-2'>
				<h2 className={`${gabrito.className} text-[16px]`}>Font-End Developer and Designer</h2>
				<p className="text-[13px]">Based in Vancouver B.C.</p>
				<p className="text-[12px]">Focused on minimal and functional design</p>
			</section>

			{/* Links */}
			<Links />

			{/* Project List */}
			<ProjectsList />

			{/* Tech Stack */}
			<section className='card order-6 col-span-2 relative'>
				<ul className='flex gap-2 absolute top-0 right-4'>
					<li className='tech-stack-facet'>All</li>
					<li className='tech-stack-facet'>Development</li>
					<li className='tech-stack-facet'>Design</li>
				</ul>
				<h2 className={`${gabrito.className} title mt-12`}>Tech Stack</h2>
			</section>
		</main>
		
	);
}