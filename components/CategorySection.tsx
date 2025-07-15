"use client";

import { useState } from "react";
import {
	HiOutlineChevronDown,
	HiOutlineChevronUp,
	HiPlusCircle,
} from "react-icons/hi";

const CategorySection = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className="border-y-1 border-neutral-500">
				<button className="flex flex-row items-center">
					<HiPlusCircle className="m-2" /> Add Category
				</button>
			</div>
			<div className="flex justify-between border-y-1 border-neutral-500 py-2">
				<button
					// TODO: add onclick to close all categories
					// onClick={}
					className="p-1 flex items-center"
				>
					{open ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
					Category
				</button>
				<div className="flex items-center mr-4">
					<div className="flex w-44 justify-end">Spent</div>
					<div className="flex w-44 justify-end">Allotted</div>
					<div className="flex w-44 justify-end">Balance</div>
				</div>
			</div>
			<div className="flex justify-between border-b-1 border-neutral-500 py-2">
				<div className="pl-5">Uncategorized Transactions</div>
				<div className="flex items-center mr-4">
					<div className="flex w-44 justify-end">-</div>
					<div className="flex w-44 justify-end">-$50.35</div>
					<div className="flex w-44 justify-end">-50.35</div>
				</div>
			</div>
			<div className="flex justify-between border-b-2 border-neutral-500 py-2 bg-neutral-300">
				<button className="p-1 flex items-center">
					{open ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
					Credit Card Payments
				</button>
				<div className="flex items-center mr-4 ">
					<div className="flex w-44 justify-end">$0.00</div>
					<div className="flex w-44 justify-end">$0.00</div>
					<div className="flex w-44 justify-end">$0.00</div>
				</div>
			</div>
			<div className="flex justify-between border-b-1 border-neutral-500 py-2">
				<div className="pl-5">Capital One</div>
				<div className="flex items-center mr-4">
					<div className="flex w-44 justify-end">$0.00</div>
					<div className="flex w-44 justify-end">$0.00</div>
					<div className="flex w-44 justify-end">$0.00</div>
				</div>
			</div>
			<div className="flex justify-between border-b-2 border-neutral-500 py-2 bg-neutral-300">
				<button className="p-1 flex items-center">
					{open ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
					Bills
				</button>
				<div className="flex items-center mr-4 ">
					<div className="flex w-44 justify-end">$0.00</div>
					<div className="flex w-44 justify-end">$0.00</div>
					<div className="flex w-44 justify-end">$0.00</div>
				</div>
			</div>
			<div className="flex justify-between border-b-1 border-neutral-500 py-2">
				<div className="pl-5">Rent</div>
				<div className="flex items-center mr-4">
					<div className="flex w-44 justify-end">$0.00</div>
					<div className="flex w-44 justify-end">$0.00</div>
					<div className="flex w-44 justify-end">$0.00</div>
				</div>
			</div>
		</div>
	);
};

export default CategorySection;
