"use client";

import { useState } from "react";
import { login, signup } from "./actions";

const LoginPage = () => {
	const [email, setEmail] = useState<string>("");
		const [password, setPassword] = useState<string>("");
		const [username, setUsername] = useState<string>("");
		const [authType, setAuthType] = useState<"logIn" | "signUp">("logIn");
	
		return (
			<div className="flex justify-center items-center h-full">
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
						formAction={authType === "logIn" ? login : signup}
						className="p-2 mt-4 border-1 rounded-sm bg-neutral-700 w-full border-[#c468e5]"
					>
						{authType === "logIn" ? "Sign in" : "Sign up"}
					</button>
	
					<div className="flex mt-3">
						<p>Don't have an account?</p>
						<button
							onClick={() =>
								setAuthType(
									authType === "logIn" ? "signUp" : "logIn"
								)
							}
							className="text-[#c468e5] ml-1"
						>
							Sign up
						</button>
					</div>
				</form>
			</div>
		);
}
 
export default LoginPage;