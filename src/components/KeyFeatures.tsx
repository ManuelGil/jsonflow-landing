import { BentoGrid, BentoCard } from '@/components';
import { FileJson, GitGraph, Download, Code } from 'lucide-react';

const features = [
	{
		name: 'Multi-Format Support',
		description: 'JSON, YAML, XML, CSV, and many more.',
		icon: FileJson,
		background: (
			<img
				src="/assets/formats.png"
				alt="Formats illustration"
				className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-300"
			/>
		),
		className: 'col-span-3 lg:col-span-1',
	},
	{
		name: 'Seamless VS Code Integration',
		description:
			'Works right where you code – inside VS Code. No setup required.',
		icon: Code,
		background: (
			<div className="flex flex-row justify-end">
				<img
					src="/assets/windsurf.png"
					alt="Formats illustration"
					className="h-64 w-auto opacity-20 group-hover:opacity-40 transition-opacity duration-300 -rotate-16 mt-6 -mx-5"
				/>
				<img
					src="/assets/cursor.png"
					alt="Formats illustration"
					className="h-64 w-auto opacity-20 group-hover:opacity-40 transition-opacity duration-300 -mx-5 -rotate-8"
				/>
				<img
					src="/assets/vscode.png"
					alt="Formats illustration"
					className="h-84 w-auto opacity-20 group-hover:opacity-40 transition-opacity duration-300 rotate-8 mt-4 -mx-5"
				/>
			</div>
		),
		className: 'col-span-3 lg:col-span-2',
	},
	{
		name: 'Instant Graphs',
		description: 'Explore deeply nested structures with a single click.',
		icon: GitGraph,

		className: 'col-span-3 lg:col-span-2',
	},
	{
		name: 'Export with Ease',
		description: 'Export graphs as JPG, PNG or SVG with one click.',
		icon: Download,
		background: (
			<img
				src="/assets/formats2.png"
				alt="Formats illustration"
				className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-300"
			/>
		),
		className: 'col-span-3 lg:col-span-1',
	},
];

export function KeyFeatures() {
	return (
		<>
			<BentoGrid>
				{features.map((feature) => (
					<BentoCard
						key={feature.name}
						name={feature.name}
						description={feature.description}
						Icon={feature.icon}
						className={feature.className}
						background={feature.background}
					/>
				))}
			</BentoGrid>
		</>
	);
}
