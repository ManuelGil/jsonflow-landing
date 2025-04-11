import {
	Button,
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Avatar,
	AvatarImage,
	AvatarFallback,
	BorderBeam,
} from '@/components';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface MemberCardProps {
	name: string;
	role: string;
	photo: string;
	github?: string;
	linkedin?: string;
	x?: string;
}

export function MemberCard({
	name,
	role,
	photo,
	github,
	linkedin,
	x,
}: MemberCardProps) {
	return (
		<Card className="relative overflow-hidden w-full xs:w-auto">
			<BorderBeam
				duration={8}
				size={100}
				colorFrom="#1e40af"
				colorTo="#3b82f6"
			/>
			<CardHeader className="gap-4 flex flex-row items-center">
				<Avatar className="size-12">
					<AvatarImage src={photo} alt={name} />
					<AvatarFallback>{name[0]}</AvatarFallback>
				</Avatar>
				<div className="flex flex-col gap-2">
					<CardTitle>{name}</CardTitle>
					<CardDescription>{role}</CardDescription>
				</div>
			</CardHeader>
			<CardFooter className="gap-4 xs:gap-2 justify-center xs:justify-between">
				{github && (
					<Button
						variant="ghost"
						size="icon"
						className="xs:size-auto xs:h-9 xs:px-4"
						asChild>
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2">
							<img src="/assets/github_dark.svg" alt="GitHub" className="h-5" />
							<span className="hidden xs:inline">GitHub</span>
						</a>
					</Button>
				)}
				{linkedin && (
					<Button
						variant="ghost"
						size="icon"
						className="xs:size-auto xs:h-9 xs:px-4"
						asChild>
						<a
							href={linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2">
							<img src="/assets/linkedin.svg" alt="LinkedIn" className="h-5" />
							<span className="hidden xs:inline">LinkedIn</span>
						</a>
					</Button>
				)}
				{x && (
					<Button
						variant="ghost"
						size="icon"
						className="xs:size-auto xs:h-9 xs:px-4"
						asChild>
						<a
							href={x}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2">
							<img src="/assets/x_dark.svg" alt="Twitter" className="h-4" />
							<span className="hidden xs:inline">Twitter</span>
						</a>
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}
