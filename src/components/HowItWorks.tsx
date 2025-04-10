import { useState, useRef, useEffect, useCallback } from 'react';
import { useInView, motion, AnimatePresence } from 'motion/react';
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
		image: '/assets/step1.webp',
		imageAlt:
			'VS Code extension marketplace showing the JSONFlow extension installation page with install button',
	},
	{
		title: 'Open',
		description: 'Load any supported data file.',
		icon: File,
		image: '/assets/step2.webp',
		imageAlt:
			'VS Code editor window showing a JSON file being opened with the JSONFlow extension',
	},
	{
		title: 'Visualize',
		description: 'Interact with a clean, structured node-based graph.',
		icon: ScanSearch,
		image: '/assets/step3.webp',
		imageAlt:
			'Interactive node-based graph visualization of a JSON structure with connected nodes and properties',
	},
];

export function HowItWorks() {
	const maxStep = 2;
	const [currentStep, setCurrentStep] = useState(0);
	const [carouselLocked, setCarouselLocked] = useState(false);
	const displayImageIndex = Math.min(currentStep, maxStep);
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 1 });

	const handleWheel = useCallback(
		(event: WheelEvent) => {
			if (event.deltaY > 0) {
				if (!carouselLocked && currentStep === 0) {
					event.preventDefault();
					setCarouselLocked(true);
					setCurrentStep(1);
				} else if (carouselLocked && currentStep < maxStep + 1) {
					event.preventDefault();
					setCurrentStep((prev) => {
						const newStep = Math.min(prev + 1, maxStep + 1);
						if (newStep === maxStep) {
							setCarouselLocked(false);
						}
						return newStep;
					});
				}
			} else if (event.deltaY < 0) {
				if (!carouselLocked && currentStep === maxStep) {
					event.preventDefault();
					setCarouselLocked(true);
				} else if (carouselLocked && currentStep > 0) {
					event.preventDefault();
					setCurrentStep((prev) => {
						const newStep = Math.max(prev - 1, 0);
						if (newStep === 0) {
							setCarouselLocked(false);
						}
						return newStep;
					});
				}
			}
		},
		[carouselLocked, currentStep, maxStep]
	);

	useEffect(() => {
		if (isInView) {
			document.addEventListener('wheel', handleWheel, { passive: false });
		} else {
			document.removeEventListener('wheel', handleWheel);
		}
		return () => {
			document.removeEventListener('wheel', handleWheel);
		};
	}, [isInView, carouselLocked, handleWheel]);

	return (
		<div className="lg:h-screen flex flex-col justify-center items-center">
			<motion.div
				className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-16 px-4"
				ref={ref}>
				<div className="flex flex-col gap-8 col-span-1 justify-center">
					<div className="flex flex-col">
						<h2 className="text-4xl font-bold">How It Works</h2>
						<p className="text-muted-foreground text-lg">
							Get started in three simple steps
						</p>
					</div>
					<div className="flex flex-col gap-4">
						{steps.map((step, index) => (
							<motion.div
								key={index}
								animate={{
									opacity: index <= currentStep ? 1 : 0.25,
									scale: index === currentStep ? 1.05 : 1,
								}}
								transition={{
									opacity: {
										duration: 0.2,
										ease: 'easeInOut',
									},
									scale: {
										duration: 0.3,
										ease: 'anticipate',
									},
								}}>
								<Card className="transition-all duration-200">
									<CardHeader className="inline-flex gap-4 items-center">
										<div
											className={`size-10 rounded-full flex items-center justify-center aspect-square border-2 border-secondary-foreground`}>
											<step.icon className="text-neutral-50" />
										</div>
										<div className="flex flex-col gap-2">
											<CardTitle>{step.title}</CardTitle>
											<CardDescription>{step.description}</CardDescription>
										</div>
									</CardHeader>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
				<div className="flex flex-col col-span-1 lg:col-span-2 items-center justify-center rounded-md aspect-video">
					<AnimatePresence mode="wait">
						<motion.img
							key={displayImageIndex}
							src={steps[displayImageIndex].image}
							alt={steps[displayImageIndex].imageAlt}
							className="h-full aspect-video object-contain rounded-md drop-shadow-lg drop-shadow-neutral-50/10"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{
								type: 'spring',
								stiffness: 200,
								damping: 20,
							}}
						/>
					</AnimatePresence>
				</div>
			</motion.div>
		</div>
	);
}
