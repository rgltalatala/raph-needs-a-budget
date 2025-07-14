import Header from "@/components/Header";

const BudgetPage = () => {
	return (
		<div className="bg-zinc-100 h-full w-full overflow-hidden overflow-y-auto">
			<Header>
				<div className="flex">
					<div className="text-black border border-red-600 border-solid flex-1">
						categories
					</div>
					<div className="text-black border border-blue-600 border-solid w-3/10">
						summary
					</div>
				</div>
			</Header>
		</div>
	);
}
 
export default BudgetPage;