import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Database } from "@/types_db";
import ClientAuthForm from "@/components/ClientAuthForm";
import LoginPage from "./login/page";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
	const supabase = createClient();
	console.log("supabase", supabase);

	// const {
	// 	data: { user },
	// } = await supabase.auth.getUser();

	// If the user is signed in, redirect to their budget
	// if (user) {
	// 	redirect(`/${user.id}/budget/${new Date().toISOString().slice(0, 7)}`);
	// }

	return (
		<main className="h-full flex flex-col items-center justify-center p-8">
			<h1 className="text-3xl font-bold text-[#c468e5] mb-4">
				Welcome to My Budget App
			</h1>
			<p className="text-zinc-600 mb-6">
				Manage your budgets, accounts, and goals with ease.
			</p>
			{/* <LoginPage /> */}
		</main>
	);
}
