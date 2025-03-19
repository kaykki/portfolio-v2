import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';

export default function Home() {
	return (
		<main className='flex gap-4 flex-col'>
			{Header("Kaki Kagatan")}
			<ProjectsList />
		</main>
	);
}