"use client";

import { useRouter } from "next/navigation";
import { HiArrowCircleLeft, HiArrowCircleRight, HiHome } from "react-icons/hi";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import LogoutButton from "./LogoutButton";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
	const { children, className } = props;

	// const { onOpen } = useAuthModal();
	const router = useRouter();

	const supabaseClient = useSupabaseClient();
	const { user } = useUser();

	const handleLogout = async () => {
		const { error } = await supabaseClient.auth.signOut();

		router.refresh();

		if (error) {
			toast.error(error.message);
		} else {
			toast.success("Logged out!");
		}
	};

	return (
		<div
			className={twMerge(
				`
                    h-fit 
                `,
				className
			)}
		>
			<div
				className="
                    w-full
                    mb-4
                    flex
                    items-center
                    p-6
                "
			>
				<div className="flex gap-x-2 items-center basis-5/12">
					<button
						onClick={() => router.back()}
						className="rounded-full bg-violet-700/50 flex items-center justify-center hover:opacity-75 transition"
					>
						<HiArrowCircleLeft size={35} />
					</button>
					<p className="text-neutral-800 text-2xl font-semibold">
						July 2025
					</p>
					<button
						onClick={() => router.forward()}
						className="rounded-full bg-violet-700/50 flex items-center justify-center hover:opacity-75 transition"
					>
						<HiArrowCircleRight size={35} />
					</button>
				</div>
				<div className="text-black flex bg-violet-700/50 rounded-lg p-3">
					<p className="font-bold pr-2">$98.08</p>
					<p>Ready to Assign</p>
				</div>
			</div>
			<LogoutButton />
			{children}
		</div>
	);
};

export default Header;
