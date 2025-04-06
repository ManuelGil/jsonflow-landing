import { useState } from 'react';
import { motion } from 'motion/react';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Download, File, ScanSearch } from 'lucide-react';

const steps = [
	{
		title: 'Install',
		description: 'Get the extension from the VS Code Marketplace.',
		icon: Download,
		image: '/assets/install.jpg',
	},
	{
		title: 'Open',
		description: 'Load any supported data file.',
		icon: File,
		image: '/assets/open.jpg',
	},
	{
		title: 'Visualize',
		description: 'Interact with a clean, structured node-based graph.',
		icon: ScanSearch,
		image: '/assets/visualize.jpg',
	},
];

export function HowItWorks() {
	const [currentStep, setCurrentStep] = useState(1);

	return (
		<>
			<div className="flex flex-col gap-8 col-span-1 justify-center">
				<div className="flex flex-col">
					<h2 className="text-4xl font-bold">How It Works</h2>
					<p className="text-muted-foreground text-lg">
						Get started in three simple steps
					</p>
				</div>
				<div className="flex flex-col gap-4">
					{steps.map((step, index) => (
						<Card
							key={index}
							className={`${
								index === currentStep
									? ''
									: index < currentStep
									? 'bg-green-500/10'
									: 'opacity-50'
							}`}>
							<CardHeader className="inline-flex gap-4 items-center">
								<div
									className={`size-10 rounded-full flex items-center justify-center aspect-square ${
										index === currentStep
											? 'border-2 border-secondary-foreground'
											: index < currentStep
											? 'bg-green-500'
											: 'border-2 border-secondary-foreground'
									}`}>
									<step.icon
										className={`${
											index === currentStep
												? 'text-neutral-50'
												: index < currentStep
												? 'text-neutral-950'
												: 'text-neutral-50'
										}`}
									/>
								</div>
								<div className="flex flex-col gap-2">
									<CardTitle>{step.title}</CardTitle>
									<CardDescription>{step.description}</CardDescription>
								</div>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
			<div className="flex flex-col col-span-1 md:col-span-2">
				<img
					src={steps[currentStep].image}
					alt={steps[currentStep].title}
					className="w-full h-full object-cover rounded-lg"
				/>
			</div>
		</>
	);
}
