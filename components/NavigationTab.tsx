"use client";

import { twMerge } from "tailwind-merge";

import Link from "next/link";
import { IconType } from "react-icons";

interface NavigationTabProps {
	icon: IconType;
	label: string;
	active?: boolean;
	href: string;
}

const NavigationTab: React.FC<NavigationTabProps> = (props) => {
	const { icon: Icon, label, active, href } = props;

	return (
		<Link
			href={href}
			className={twMerge(
				`
				flex
				flex-row
				h-auto
				items-center
				w-full
				gap-x-4
				text-md
				font-medium
				cursor-pointer
				transition
				p-2
				my-1
				rounded-md
				hover:bg-violet-500/50
				`,
				// active && "text-white",
				active && "bg-violet-700/50"
			)}
		>
			<Icon className="" size={26} />
			<p className="">{label}</p>
		</Link>
	);
};

export default NavigationTab;
