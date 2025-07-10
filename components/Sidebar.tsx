"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiCash, HiCurrencyDollar } from "react-icons/hi";
import NavigationTab from "./NavigationTab";
import AccountGroups from "./AccountGroups";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const { children } = props;

    const pathname = usePathname();

    const routes = useMemo(
		() => [
			{
				icon: HiCash,
				label: "Home",
				active: pathname !== "/search", // TODO: change logic to highlight when active
				href: "/",
			},
			{
				icon: HiCurrencyDollar,
				label: "All transactions",
				active: pathname !== "/search",
				href: "/",
			},
		],
		[]
	);

    return (
		<div className="flex h-full">
			<div className="flex-col gap-y-2 bg-violet-400 h-full w-[300px] p-2">
				{/* User settings */}
				<div className="flex flex-row h-auto justify-center items-center w-full gap-x-4 py-1 text-md font-medium">
					My Budget
				</div>
				{/*  navigation tabs */}
				<div className="flex flex-col">
					{routes.map((route) => (
						<NavigationTab key={route.label} {...route} />
					))}
				</div>
				{/* User accounts */}
                <AccountGroups />
			</div>
			<main className="h-full flex-1 overflow-y-auto py-2">
				{children}
			</main>
		</div>
	);
}

export default Sidebar;