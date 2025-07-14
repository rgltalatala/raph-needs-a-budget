"use client";

import { useState } from "react";
import { signin, signup } from "./actions";

const LoginForm = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const [authType, setAuthType] = useState<"signIn" | "signUp">("signIn");
	let formSwitcherContent;

	if (authType === "signIn") {
		formSwitcherContent = (
			<>
				<p>Don't have an account?</p>
				<button
					onClick={() => setAuthType("signUp")}
					className="text-[#c468e5] ml-1"
				>
					Sign up
				</button>
			</>
		);
	} else {
		formSwitcherContent = (
			<>
				<p>Already have an account?</p>
				<button
					onClick={() => setAuthType("signIn")}
					className="text-[#c468e5] ml-1"
				>
					Sign in
				</button>
			</>
		);
	}

	return (
		<form className="flex flex-col">
			<label htmlFor="email" className="p-1 m-1">
				Email Address
			</label>
			<input
				id="email"
				name="email"
				type="email"
				className="p-2 bg-neutral-800 rounded-sm border-1 border-neutral-700"
				placeholder="Your email address"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			{authType === "signUp" && (
				<>
					<label htmlFor="username" className="p-1 m-1">
						Username
					</label>
					<input
						id="username"
						name="username"
						type="username"
						className="p-2 bg-neutral-800 rounded-sm border-1 border-neutral-700"
						placeholder="Your username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</>
			)}
			<label htmlFor="password" className="p-1 m-1">
				Your password
			</label>
			<input
				id="password"
				name="password"
				type="password"
				className="p-2 bg-neutral-800 rounded-sm border-1 border-neutral-700"
				placeholder="Your password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<button
				type="submit"
				formAction={authType === "signIn" ? signin : signup}
				className="p-2 mt-4 border-1 rounded-sm bg-neutral-700 w-full border-[#c468e5]"
			>
				{authType === "signIn" ? "Sign in" : "Sign up"}
			</button>

			<div className="flex mt-3">{formSwitcherContent}</div>
		</form>
	);
};

export default LoginForm;
