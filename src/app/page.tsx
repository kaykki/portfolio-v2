import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';

export default function Home() {
	return (
		<main>
			<h1>{Header("Kaki Kagatan")}</h1>
			<ProjectsList />
		</main>
	);
}