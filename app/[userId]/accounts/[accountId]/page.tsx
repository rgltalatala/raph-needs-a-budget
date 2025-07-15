const AccountPage = () => {
	return (
		<div>
			{/* header */}
			<div>
				<h1>Account name</h1>
				<div>account type</div>
			</div>
			{/* might just need a total balance since users will manually input their transactions */}
			<div>
				<div>cleared balance</div>+<div>uncleared balance</div>=
				<div>working balance</div>
				<button>add transaction</button>
			</div>
			{/* transaction section */}
			<div></div>
		</div>
	);
};

export default AccountPage;
