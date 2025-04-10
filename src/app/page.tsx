import Image from 'next/image';
import ProjectsList from '@/components/ProjectsList';
import Links from '@/components/Links';
import TechStack from '@/components/TechStack';

export default function Home() {
	return (
		<main className='order-2 main-layout'>
			<div className='relative rounded-lg order-1 mobile-m:col-start-2 mobile-m:row-span-2'>
				<Image
					src='/portrait.jpg'
					alt='Portrait of Kaki Kagatan'
					fill
					className='object-cover rounded-lg'
				/>
			</div>
			<section className='card order-1 row-span-2 font-fredoka flex flex-col gap-2 justify-around'>
				<div>
					<h2 className='title'>Font-End <br className='mobile-m:hidden'/> Developer</h2>
					<p className="text-[12px] mobile-m:text-[13px] mobile-l:text-[15px]">Based in Vancouver B.C.</p>
				</div>
				<p className="paragraph">Front-End Developer with a strong foundation in UI/UX design principles. Passionate about creating optimized, functional, and user-friendly web experiences. Currently diving deep into Next.js 15 development.</p>
			</section>
			<Links />
			<ProjectsList />
			<TechStack />
		</main>

	);
}