"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";

const LogoutButton = () => {
	const supabase = useSupabaseClient();

	const handleLogout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error("Error logging out:", error.message);
		}
	};

	return (
		<button
			onClick={handleLogout}
			className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
		>
			Log Out
		</button>
	);
};

export default LogoutButton;
