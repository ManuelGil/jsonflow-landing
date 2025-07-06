import { Button, buttonVariants } from '@/components';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const links = [
	{
		label: 'Features',
		href: '#features',
	},
	{
		label: 'How It Works',
		href: '#how-it-works',
	},
	{
		label: 'Use Cases',
		href: '#use-cases',
	},
	{
		label: 'Team',
		href: '#team',
	},
];

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed top-4 left-4 right-4 w-9/10 md:w-fit justify-self-center flex-col items-center bg-neutral-100/75 dark:bg-neutral-900/75 py-2 px-4 rounded-md backdrop-blur-md z-20 border border-neutral-200 dark:border-neutral-800 flex">
			<div className="flex flex-row items-center gap-12 justify-between w-full">
				<a href="/" className="flex flex-row gap-2 items-center">
					<img src="/logo.svg" alt="JSON Flow Logo" className="size-6" />
					<span className="font-bold text-lg">JSON Flow</span>
				</a>
				<nav className="gap-6 hidden md:flex">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className={cn(
								buttonVariants({ variant: 'link' }),
								'text-muted-foreground p-0 hover:no-underline hover:text-blue-500'
							)}>
							{link.label}
						</a>
					))}
				</nav>
				<a
					href="https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-json-flow"
					target="_blank"
					className="hidden md:block">
					<Button>Install on VS Code</Button>
				</a>
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden"
					aria-label="Toggle menu"
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X /> : <Menu />}
				</Button>
			</div>
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						className="flex flex-col gap-4 w-full mt-4 overflow-hidden">
						<motion.a
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							href="https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-json-flow"
							target="_blank">
							<Button className="w-full">Install on VS Code</Button>
						</motion.a>
						{links.map((link, i) => (
							<motion.a
								key={link.href}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.1 * (i + 3) }}
								href={link.href}
								className={cn(
									buttonVariants({ variant: 'link' }),
									'text-muted-foreground p-0 hover:no-underline hover:text-blue-500'
								)}>
								{link.label}
							</motion.a>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
