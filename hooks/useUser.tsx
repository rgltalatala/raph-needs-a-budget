"use client";

import { UserDetails } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

type UserContextType = {
	user: User | null;
	userDetails: UserDetails | null;
	isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
	undefined
);

export interface Props {
	[propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
	const supabase = createClient();
	const [user, setUser] = useState<User | null>(null);
	const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			setIsLoading(true);
			const {
				data: { user },
				error,
			} = await supabase.auth.getUser();
			if (error) {
				console.error("Error fetching user:", error);
				setUser(null);
			} else {
				setUser(user);
			}
			setIsLoading(false);
		};

		fetchUser();

		const { data: authListener } = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setUser(session?.user ?? null);
			}
		);

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, [supabase]);

	return (
		<UserContext.Provider
			value={{ user, userDetails, isLoading }}
			{...props}
		/>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a MyUserContextProvider");
	}

	return context;
};
