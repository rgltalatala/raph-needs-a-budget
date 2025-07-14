import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import { useUser } from "@/hooks/useUser";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
	title: "Raph needs a budget",
	description: "Envelope System Personal Budgeting App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<SupabaseProvider>
					<UserProvider>
						{/* <ModalProvider /> */}
						{children}
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
