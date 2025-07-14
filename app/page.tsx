import { createClient } from "@/utils/supabase/server";
import LogoutButton from "@/components/LogoutButton";
import { redirect } from "next/navigation";

export default async function Home() {
	const supabase = createClient();
	
	const user = (await (await supabase).auth.getUser()).data.user;
	
	// If the user is signed in, redirect to their budget
	if (user) {
		redirect(
			`/${user.id}/budget/${new Date()
				.toISOString()
				.slice(0, 7)
				.replace("-", "")}`
		);
	}
	
	redirect('/login');
}
