"use client";

import { useState } from "react";
import { AccountGroup as AccountGroupType } from "../types";
import Account from "./Account";
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleUp } from "react-icons/hi";

interface AccountGroupProps {
	accountGroup: AccountGroupType;
}

const AccountGroup = (props: AccountGroupProps) => {
	const { accountGroup } = props;
	const { id, title, accounts } = accountGroup;
	const [open, setOpen] = useState(false);

	const accountGroupTotal = accounts.reduce((total, acc) => total + acc.total, 0);

	return (
		<div>
			<div
				className="flex justify-between w-full border-b-2 pb-1"
				onClick={() => setOpen(!open)}
			>
				<div className="flex content-center items-center">
					<div className="p-1">{open ? <HiOutlineChevronDoubleDown /> : <HiOutlineChevronDoubleUp />}</div>
					<p>{title}</p>
				</div>
				<div className="pr-2">{accountGroupTotal}</div>
			</div>
			{open &&
				accounts.map((account) => (
					<Account key={account.id} account={account} />
				))}
		</div>
	);
};

export default AccountGroup;
