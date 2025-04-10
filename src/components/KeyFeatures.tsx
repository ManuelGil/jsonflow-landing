import { BentoGrid, BentoCard } from '@/components';
import { FileJson, GitGraph, Download, Code } from 'lucide-react';

const features = [
	{
		name: 'Multi-Format Support',
		description: 'JSON, YAML, XML, CSV, and many more.',
		icon: FileJson,
		background: (
			<img
				src="/assets/formats.webp"
				alt="Grid of file format icons including JSON, YAML, TOML, INI, CSV, HCL, XML, TSV in colorful squares"
				className="w-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-300"
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
			<img
				src="/assets/editors.webp"
				alt="Code editor logos: Windsurf, Cursor, and VS Code"
				className="w-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-300 translate-y-10 md:translate-y-0"
			/>
		),
		className: 'col-span-3 lg:col-span-2',
	},
	{
		name: 'Instant Graphs',
		description: 'Explore deeply nested structures with a single click.',
		icon: GitGraph,
		background: (
			<img
				src="/assets/graph.webp"
				alt="Hierarchical tree diagram showing interconnected nodes in various colors starting from a purple root node"
				className="w-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-300 rotate-6 md:ml-32 md:-translate-y-6 ml-4"
			/>
		),
		className: 'col-span-3 lg:col-span-2',
	},
	{
		name: 'Export with Ease',
		description: 'Export graphs as JPG, PNG or SVG with one click.',
		icon: Download,
		background: (
			<img
				src="/assets/formats2.webp"
				alt="Three export format icons - JPG, PNG, and SVG - arranged in a triangular layout with 3D effect"
				className="w-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-300"
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
