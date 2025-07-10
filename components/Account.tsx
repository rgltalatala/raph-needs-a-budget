import { Account as AccountType } from "../types";

interface AccountProps {
	account: AccountType;
}

const Account = (props: AccountProps) => {
	const { account } = props;
	const { name, total } = account;
	return (
		<div className="flex justify-between w-full pl-6 pr-2 py-1">
			<p>{name}</p>
			<div>{total.toString()}</div>
		</div>
	);
};

export default Account;
