import Image from 'next/image';
import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';
import { Gabarito } from 'next/font/google';

const gabrito = Gabarito({
	weight: '600'
})

export default function Home() {
	return (
		<main className='w-[358px] grid grid-cols-[auto_auto] grid-rows-[74px_58px_57px_auto_auto] gap-4'>
			{Header("Kaki Kagatan")}
		
				<Image src='/portrait.jpg' alt='Portrait of Kaki Kagatan' width={139.34} height={148} className='rounded-2xl shadow-md order-2 row-span-2' />
			
			
			<section className='card order-3 row-span-2'>
				<h2 className={`${gabrito.className} text-[16px]`}>Font-End Developer and Designer</h2>
				<p className="text-[13px]">Based in Vancouver B.C.</p>
				<p className="text-[12px]">Focused on minimal and functional design</p>
			</section>
			<section className='w-full h-fit card-coloured order-4 items-center'>
				<ul className='flex gap-4 items-center justify-center'>
					<li>
						<a href="https://github.com/kaykki" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-[#F0F0F0]'>
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
							</svg>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/kakikagatan/" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-[#F0F0F0]'>
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>
					</li>
					<li>
						<a href="mailto:kakikagatan@outlook.com" target="_blank" rel="noopener noreferrer">
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="25" height="25" rx="4" fill="#F0F0F0" />
								<path d="M12.5 13.0149L4.01062 6H20.9894L12.5 13.0149ZM12.5 14.8739L4 7.85033V19H21V7.85033L12.5 14.8739Z" fill="#004D57" />
							</svg>
						</a>
					</li>
				</ul>
			</section>
			<ProjectsList />
			<section className='card order-6 col-span-2'>
				<h2>Tech Stack</h2>
			</section>
		</main>
	);
}