import Image from 'next/image';
import Header from '@/components/Header';
import ThemeToggle from '@/components/ThemeToggle';
import ProjectsList from '@/components/ProjectsList';
import { Gabarito } from 'next/font/google';
import Links from '@/components/Links';

const gabrito = Gabarito({
	weight: '600'
})

export default function Home() {
	return (
		<main className='my-4 mx-auto w-[358px] grid grid-cols-[123px_128px_75px] grid-rows-[74px_58px_57px_57px_auto] gap-4'>

			{/* Header Component */}
			{Header("Kaki Kagatan")}

			{/* Toggle */}
			<ThemeToggle />

			{/* Portrait Image */}
			<div className='rounded-2xl shadow-md order-2 row-span-2'>
				<Image 
					src='/portrait.jpg' 
					alt='Portrait of Kaki Kagatan' 
					width={123} 
					height={130} 
				/>
			</div>


			{/* Description */}
			<section className='card order-3 col-span-2 row-span-3'>
				<h2 className={`${gabrito.className} text-[16px]`}>Font-End Developer & Designer</h2>
				<p className="text-[13px]">Based in Vancouver B.C.</p>
				<p className="text-[13px]">Front-End Developer and Designer with a strong foundation in UI/UX principles. Passionate about creating optimized, functional, and user-friendly web experiences.</p>
			</section>

			{/* Links */}
			<Links />

			{/* Project List */}
			<ProjectsList />

			{/* Tech Stack */}
			<section className='card order-6 col-span-3 relative'>
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