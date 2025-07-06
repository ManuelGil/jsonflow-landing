import { motion } from 'motion/react';
import { Bug, Settings, GraduationCap, Users } from 'lucide-react';
import { CodeBlock } from './CodeBlock';
import { cn } from '@/lib/utils';

const useCases = [
	{
		title: 'Debug complex API responses',
		description:
			'Quickly identify and troubleshoot nested JSON API responses with interactive graphs.',
		icon: Bug,
		codeSnippetTitle: 'API Response',
		codeSnippet: `{
  "user": {
    "id": 12345,
    "profile": {
      "name": "John Doe",
      "settings": { ... }
    }
  }
}`,
		language: 'json',
		borderColor: 'border-yellow-500/25',
		iconColor: 'text-yellow-500',
	},
	{
		title: 'Understand configuration files',
		description:
			'Easily parse and explore JSON configuration files with syntax highlighting and validation.',
		icon: Settings,
		codeSnippetTitle: 'config.yaml',
		codeSnippet: `app:
  name: jsonflow
  version: "1.0.0"
  metadata:
    author: "imgildev"
    license: "MIT"
features:
  highlight: true
  lint: true
  plugins: [ ... ]`,
		language: 'yaml',
		borderColor: 'border-green-500/25',
		iconColor: 'text-green-500',
	},
	{
		title: 'Teach data structures with clarity',
		description:
			'Visualize trees, graphs, and other data structures interactively to enhance learning.',
		icon: GraduationCap,
		codeSnippetTitle: 'tree.toml',
		codeSnippet: `[tree]
value = "root"

[[tree.children]]
value = "child1"
leaf = true

[[tree.children]]
value = "child2"
children = [ ... ]`,
		language: 'toml',
		borderColor: 'border-blue-500/25',
		iconColor: 'text-blue-500',
	},
	{
		title: 'Collaborate using visual documentation',
		description:
			'Share and annotate JSON workflows with your team for streamlined collaboration.',
		icon: Users,
		codeSnippetTitle: 'workflow.ini',
		codeSnippet: `[workflow]
step1 = "Fetch data"
step2 = "Process data"
details = "Transform nodes and edges: [ ... ]"
step3 = "Save results"`,
		language: 'ini',
		borderColor: 'border-purple-500/25',
		iconColor: 'text-purple-500',
	},
];

export function UseCases() {
	return (
		<div className="relative">
			<div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent hidden md:block" />

			{useCases.map((useCase, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: index * 0.2 }}
					viewport={{ once: true }}
					className={cn(
						'relative flex items-center mb-12 flex-col md:gap-24',
						index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
					)}>
					<div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex">
						<div
							className={cn(
								'p-3 rounded-full bg-background border-2',
								useCase.borderColor
							)}>
							<useCase.icon className={cn('w-5 h-5', useCase.iconColor)} />
						</div>
					</div>

					<div
						className={cn(
							'w-full space-y-2',
							index % 2 === 0 ? 'md:text-right' : 'md:text-left'
						)}>
						<h3 className="text-xl font-semibold">{useCase.title}</h3>
						<p className="text-muted-foreground">{useCase.description}</p>
					</div>
					<div className="w-full">
						<CodeBlock
							code={useCase.codeSnippet}
							language={useCase.language}
							filename={useCase.codeSnippetTitle}
						/>
					</div>
				</motion.div>
			))}
		</div>
	);
}
