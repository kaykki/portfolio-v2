import Image from 'next/image';
import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';
import Links from '@/components/Links';
import TechStack from '@/components/TechStack';

export default function Home() {
	return (
		<main className='mobile-layout'>
			{Header("Kaki Kagatan")}
			<Image
				src='/portrait.jpg'
				alt='Portrait of Kaki Kagatan'
				width={123}
				height={130}
				className='rounded-lg shadow-md order-2'
			/>
			<section className='order-3 card row-span-2 font-fredoka flex flex-col gap-2'>
				<div>
					<h2 className='title'>Font-End Developer</h2>
					<p className="paragraph">Based in Vancouver B.C.</p>
				</div>
				<p className="paragraph">Front-End Developer with a strong foundation in UI/UX design principles. Passionate about creating optimized, functional, and user-friendly web experiences.</p>
			</section>
			<Links />
			<ProjectsList />
			<TechStack />
		</main>

	);
}