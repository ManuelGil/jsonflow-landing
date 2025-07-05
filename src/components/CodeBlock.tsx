import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';
import { Skeleton } from '@/components/ui/skeleton';

interface CodeBlockProps {
	code: string;
	language: string;
	filename?: string;
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
	const [lines, setLines] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const highlightCode = async () => {
			try {
				const highlighted = await codeToHtml(code, {
					lang: language,
					theme: 'ayu-dark',
				});

				const stripped = highlighted
					.replace(/^<pre.*?>/, '')
					.replace(/<\/pre>$/, '')
					.replace(/^<code.*?>/, '')
					.replace(/<\/code>$/, '');
				setLines(stripped.split('\n'));
			} catch (error) {
				console.error('Error highlighting code:', error);
				setLines(code.split('\n'));
			} finally {
				setIsLoading(false);
			}
		};

		highlightCode();
	}, [code, language]);

	return (
		<div className="border-2 rounded-lg overflow-hidden pb-4 bg-gradient-to-br from-primary/15 to-primary-secondary">
			<div className="flex items-center gap-2 px-4 py-3">
				<div className="flex gap-2">
					<div className="w-3 h-3 rounded-full bg-red-500" />
					<div className="w-3 h-3 rounded-full bg-yellow-500" />
					<div className="w-3 h-3 rounded-full bg-green-500" />
				</div>
				{filename && (
					<span className="text-sm text-muted-foreground font-medium text-center w-full mr-13">
						{filename}
					</span>
				)}
			</div>
			<div className="text-sm overflow-x-auto">
				{isLoading ? (
					<div className="p-4">
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-3/4 mb-2" />
						<Skeleton className="h-4 w-1/2 mb-2" />
						<Skeleton className="h-4 w-2/3" />
					</div>
				) : (
					<pre className="[&>pre]:!m-0 [&>pre]:!p-4 [&>pre]:!bg-transparent [&>pre]:!border-0">
						{lines.map((line, idx) => (
							<div key={idx} className="flex">
								<span className="inline-block w-10 text-right pr-4 select-none text-muted-foreground">
									{idx + 1}
								</span>
								<span dangerouslySetInnerHTML={{ __html: line || ' ' }} />
							</div>
						))}
					</pre>
				)}
			</div>
		</div>
	);
}
