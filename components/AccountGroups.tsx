import AccountGroup from "./AccountGroup";

const AccountGroups = () => {

	// TODO: fetch account groups from supabase then map them out here
	const userAcountGroups = [
		{
			id: "randomly-generated-acc-group-id-1",
			title: "Cash",
			accounts: [
				{
					id: "randomly-generated-cash-id-1",
					name: "Cap 1",
					total: 1234.56,
				},
				{
					id: "randomly-generated-cash-id-2",
					name: "Chase",
					total: 1234.56,
				},
			],
		},
		{
			id: "randomly-generated-acc-group-id-2",
			title: "Credit",
			accounts: [
				{
					id: "randomly-generated-credit-id-1",
					name: "CSP",
					total: -120.67,
				},
				{
					id: "randomly-generated-credit-id-2",
					name: "Chase",
					total: -934.12,
				},
			],
		},
	];
	return (
		<div className="flex flex-col p-2 h-full">
			{userAcountGroups.map((accountGroup) => (
				<AccountGroup key={accountGroup.id} accountGroup={accountGroup} />
			))}
		</div>
	);
}
 
export default AccountGroups;