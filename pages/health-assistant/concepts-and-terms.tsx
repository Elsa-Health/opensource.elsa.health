import DocsLayout from "../../components/DocsLayout";
import Footer from "../../components/Footer";
import SidebarContent from "./components/SidebarContent";

const content = [
	{
		term: "React Native",
		description:
			"React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
		reference: "https://reactnative.dev/",
	},
	{
		term: "Android Studio",
		description:
			"Android Studio provides the fastest tools for building apps on every type of Android device.",
		reference: "https://developer.android.com/studio",
	},
	{
		term: "TypeScript",
		description:
			"TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.",
		reference: "https://www.typescriptlang.org/",
	},
	{
		term: "Naive Bayes Algorithm (offline)",
		description:
			"It is a classification technique based on Bayes’ Theorem with an assumption of independence among predictors. In simple terms, a Naive Bayes classifier assumes that the presence of a particular feature in a class is unrelated to the presence of any other feature.",
		reference:
			"https://www.analyticsvidhya.com/blog/2017/09/naive-bayes-explained/",
	},
];

const Terminology = () => {
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
								Concepts & Terms
							</h2>
							<div className="mt-6">
								<dl className="space-y-8 divide-y divide-gray-200">
									{content.map((cont) => (
										<div
											key={cont.term}
											className="pt-6 md:grid md:grid-cols-12 md:gap-8"
										>
											<dt className="text-base font-medium text-gray-900 md:col-span-4 lg:col-span-3">
												{cont.term}
											</dt>
											<dd className="mt-2 md:mt-0 md:col-span-8 lg:col-span-9">
												<p className="text-base text-gray-500 mb-2">
													{cont.description}
												</p>
												<a
													className="text-primary"
													href={cont.reference}
												>
													Reference &#10230;
												</a>
											</dd>
										</div>
									))}
								</dl>
							</div>
							<div className="mt-10">
								<Footer />
							</div>
						</div>
					</div>
				</main>
			</DocsLayout>
		</div>
	);
};

export default Terminology;
