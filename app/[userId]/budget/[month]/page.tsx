import CategorySection from "@/components/CategorySection";
import Header from "@/components/Header";

const BudgetPage = () => {
	return (
		<div className="bg-zinc-100 h-full w-full overflow-hidden overflow-y-auto">
			<Header>
				<div className="flex">
					<div className="text-black flex-1">
						<CategorySection />
					</div>
					{/* no category selected */}
					<div className="text-black border border-blue-600 border-solid w-3/10">
						<div>july summary</div>
						<div>left over from last month</div>
						<div>assigned in julyactivity</div>
						<div>available</div>
					</div>
					{/* use hook to display this section instead when category is selected */}
					<div className="text-black">
						<h1>Category name</h1>
						<div>
							<div>available balance</div>
							<div>cash left over from last month</div>
							<div>assigned this month</div>
							<div>cash spending</div>
							<div>credit spending</div>
						</div>
						<div>
							<h1>target</h1>
							<div>Set aside another {'dollar amount'} each year</div>
							<div>by {'goal date'}</div>
							<div>circle graph showing how % of assigned amount so far</div>
							<div>total to assign by goal date</div>
							<div>assigned so far</div>
						</div>
					</div>
				</div>
			</Header>
		</div>
	);
};

export default BudgetPage;
