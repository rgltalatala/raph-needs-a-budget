import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Database } from "@/types_db";
import Sidebar from "@/components/Sidebar";
import { createClient } from "@/utils/supabase/server";

interface Props {
	children: ReactNode;
	params: {
		userId: string;
	};
}

export default async function UserScopedLayout({ children, params }: Props) {

	return (
		<div className="h-full w-full">
			<Sidebar>{children}</Sidebar>
		</div>
	);
}
