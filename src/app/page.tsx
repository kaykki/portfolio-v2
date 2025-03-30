import Image from 'next/image';
import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';
import Links from '@/components/Links';
import TechStack from '@/components/TechStack';

export default function Home() {
	return (
		<main className='
				my-4 mx-auto 
				w-[358px] grid 
				grid-cols-[219px_123px] 
				grid-rows-[67px_45px_auto_auto_auto] 
				gap-4'>

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
			<Links />
			<ProjectsList />
			<TechStack />
		</main>

	);
}