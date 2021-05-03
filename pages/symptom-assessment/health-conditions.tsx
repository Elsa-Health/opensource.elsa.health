/* This example requires Tailwind CSS v2.0+ */
import {
	ShareIcon,
	BeakerIcon,
} from "@heroicons/react/solid";
import React from "react";
import { v1 as uuidV1 } from "uuid";
import _ from "lodash";
import DocsLayout from "../../components/DocsLayout";
import SidebarContent from "./components/SidebarContent";

type condition = {
	name: string;
	system: string;
	status: "alpha" | "beta" | "production";
	modelId: string;
};

const conditionsList = [
	"urinary tract infection",
	"human papilomavirus (HPV)",
	"bacterial vaginosis",
	"chlamydia",
	"gonorrhea",
	"trichomoniasis",
	"cryptococcal meningitis",
	"bacterial meningitis",
	"tuberculosis meningitis",
	"toxoplasmosis",
	"hepatitis b",
	"pneumocystis pneumonia",
	"pneumonia",
	"tuberculosis",
	"gastritis",
	"gastroenteritis",
	"malaria",
	"coryza",
	"influenza",
	"tonsillitis",
	"laryngitis",
	"bronchitis",
];

const conditions: condition[] = conditionsList.map((condition) => ({
	name: condition
		.split(" ")
		.map((c) => _.upperFirst(c))
		.join(" "),
	system: "",
	status: "beta",
	modelId: uuidV1(),
}));

const HealthConditions = () => {
	return (
		<div>
			<DocsLayout
				sidebar={<SidebarContent />}
				sidebarTitle="Symptom Assessment"
				title="Elsa Health | Symptom Assessment"
			>
				<main className="flex-1 relative pb-8 z-0 overflow-y-auto mx-auto container px-14 py-6 text-gray-800">
					{/* <h1 className="text-3xl">Concepts & Terms</h1> */}

					<div className="bg-gray-50">
						<div className="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
							<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
								Conditions Overview
							</h2>
							<div className="mt-6">
								<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-4">
									{conditions.map((condition) => (
										<li
											key={condition.modelId}
											className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
										>
											<div className="w-full flex items-center justify-between p-6 space-x-6">
												<div className="flex-1 truncate">
													<div className="flex-col items-center">
														<h3 className="text-gray-900 text-lg font-medium">
															{condition.name}
														</h3>
														<span
															className={`flex-shrink-0 px-3 py-1  text-xs font-medium rounded-full ${
																condition.status ===
																"alpha"
																	? "text-red-800 bg-red-100"
																	: condition.status ===
																	  "beta"
																	? "text-yello-800 bg-yellow-100"
																	: "text-green-800 bg-green-100"
															}`}
														>
															{_.upperFirst(
																condition.status
															)}
														</span>
													</div>
													<p className="mt-1 text-gray-500 text-sm truncate">
														{condition.system}
													</p>
												</div>
												{/* <img
													className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
													src={condition.imageUrl}
													alt=""
												/> */}
											</div>
											<div>
												<div className="-mt-px flex divide-x divide-gray-200">
													<div className="w-0 flex-1 flex">
														<a
															// href={`${condition.modelId}`}
															onClick={() => alert("Model explorer is coming soon")}
															className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
														>
															<ShareIcon
																className="w-5 h-5 text-gray-400"
																aria-hidden="true"
															/>
															<span className="ml-3">
																View Model
															</span>
														</a>
													</div>
													<div className="-ml-px w-0 flex-1 flex">
														<a
															// href={`${condition.modelId}`}
															onClick={() => alert("Model explorer is coming soon")}
															className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
														>
															<BeakerIcon
																className="w-5 h-5 text-gray-400"
																aria-hidden="true"
															/>
															<span className="ml-3">
																Try Online
															</span>
														</a>
													</div>
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</main>
			</DocsLayout>
		</div>
	);
};

export default HealthConditions;
