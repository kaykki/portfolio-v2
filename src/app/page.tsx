import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';

export default function Home() {
	return (
		<div>
			<h1>{Header("home")}</h1>
			<h1 className="text-2xl">Home</h1>
			<ProjectsList />
			<Footer />
		</div>
	);
}