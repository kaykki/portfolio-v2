import Image from 'next/image';
import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';
import Links from '@/components/Links';

export default function Home() {
	return (
		<main 
			className='
				my-4 mx-auto 
				w-[358px] grid 
				grid-cols-[219px_123px] 
				grid-rows-[67px_45px_auto_auto_auto] 
				gap-4'			
			>

			{/* Header Component */}
			{Header("Kaki Kagatan")}

			{/* Portrait Image */}
			<div className='shadow-md order-2 row-span-2'>
				<Image 
					src='/portrait.jpg' 
					alt='Portrait of Kaki Kagatan' 
					width={123} 
					height={128} 
					className='rounded-lg'
				/>
			</div>


			{/* Description */}
			<section className='order-3 card row-span-2 font-fredoka flex flex-col gap-2'>
				<div>
					<h2 className='font-gabarito text-xl'>Font-End Developer</h2>
					<p className="text-xs font-fredoka">Based in Vancouver B.C.</p>
				</div>
				<p className="text-xs">Front-End Developer with a strong foundation in UI/UX design principles. Passionate about creating optimized, functional, and user-friendly web experiences.</p>
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
				<h2 className='font-gabarito title mt-12'>Tech Stack</h2>
			</section>
		</main>

	);
}