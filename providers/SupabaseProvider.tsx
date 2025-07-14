"use client";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

import { Database } from "@/types_db";
import { createClient } from "@/utils/supabase/client";

interface SupabaseProviderProps {
	children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = (props) => {
	const { children } = props;

	const [supabaseClient] = useState(() => createClient());

	return (
		<SessionContextProvider supabaseClient={supabaseClient}>
			{children}
		</SessionContextProvider>
	);
};

export default SupabaseProvider;
