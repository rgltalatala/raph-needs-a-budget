import { createClient } from "@/utils/supabase/server";
import LoginForm from "./LoginForm";
import { redirect } from "next/navigation";

const LoginPage = async () => {
	const supabase = createClient();

	const session = (await (await supabase).auth.getSession()).data.session;

	if (session?.user) {
		redirect('/')
	}

	return (
		<div className="flex justify-center items-center h-full">
			<LoginForm />
		</div>
	);
};

export default LoginPage;
