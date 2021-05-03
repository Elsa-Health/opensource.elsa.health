import DocsLayout from "../../components/DocsLayout";
import Footer from "../../components/Footer";
import SidebarContent from "./components/SidebarContent";

const content = [
	{
		term: "Causal Models",
		description:
			"Causal models are mathematical models representing causal relationships within an individual system or population. They facilitate inferences about causal relationships from statistical data. They can teach us a good deal about the epistemology of causation, and about the relationship between causation and probability. They have also been applied to topics of interest to philosophers, such as the logic of counterfactuals, decision theory, and the analysis of actual causation.",
		reference:
			"https://plato.stanford.edu/entries/causal-models/#:~:text=Causal%20models%20are%20mathematical%20models,relationship%20between%20causation%20and%20probability.",
	},
	{
		term: "Causal Inference",
		description:
			"Causal inference is the process of determining the independent, actual effect of a particular phenomenon that is a component of a larger system. The main difference between causal inference and inference of association is that causal inference analyzes the response of an effect variable when a cause of the effect variable is changed. The science of why things occur is called etiology. Causal inference is said to provide the evidence of causality theorized by causal reasoning.",
		reference:
			"https://en.wikipedia.org/wiki/Causal_inference#:~:text=Causal%20inference%20is%20the%20process,component%20of%20a%20larger%20system.",
	},
	{
		term: "Correlation",
		description:
			"In statistics, correlation or dependence is any statistical relationship, whether causal or not, between two random variables or bivariate data. In the broadest sense correlation is any statistical association, though it commonly refers to the degree to which a pair of variables are linearly related.",
		reference: "https://en.wikipedia.org/wiki/Correlation_and_dependence",
	},
	{
		term: "Do Calculus",
		description:
			"The do-calculus is an axiomatic system for replacing probability formulas containing the do operator with ordinary conditional probabilities. It consists of three axiom schemas that provide graphical criteria for when certain substitutions may be made.",
		reference:
			"https://plato.stanford.edu/entries/causal-models/do-calculus.html",
	},
	{
		term: "Counterfactual",
		description:
			"The basic idea of counterfactual theories of causation is that the meaning of causal claims can be explained in terms of counterfactual conditionals of the form “If A had not occurred, C would not have occurred”. Most counterfactual analyses have focused on claims of the form “event c caused event e”, describing ‘singular’ or ‘token’ or ‘actual’ causation. Such analyses have become popular since the development in the 1970s of possible world semantics for counterfactuals.",
		reference:
			"https://plato.stanford.edu/entries/causation-counterfactual/",
	},

	{
		term: "Observational Data",
		description:
			"Observational data refers to information gathered without the subject of the research (for example an individual customer, patient, employee, etc.) having to be explicitly involved in recording what they are doing.",
		reference:
			"https://www.greenbook.org/mr/market-research-methodology/researchers-should-be-aware-of-the-problems-with-observational-data/#:~:text=Observational%20data%20refers%20to%20information,recording%20what%20they%20are%20doing.",
	},
	{
		term: "Conditional Distribution",
		description:
			"A conditional distribution is a probability distribution for a sub-population. In other words, it shows the probability that a randomly selected item in a sub-population has a characteristic you're interested in.",
		reference:
			"https://www.statisticshowto.com/conditional-distribution/#:~:text=A%20conditional%20distribution%20is%20a,characteristic%20you're%20interested%20in.",
	},
	{
		term: "Random Variable",
		description:
			"A random variable, usually written X, is a variable whose possible values are numerical outcomes of a random phenomenon. There are two types of random variables, discrete and continuous.",
		reference: "http://www.stat.yale.edu/Courses/1997-98/101/ranvar.htm",
	},
	{
		term: "Probability",
		description:
			"Probability is simply how likely something is to happen. Whenever we're unsure about the outcome of an event, we can talk about the probabilities of certain outcomes—how likely they are.",
		reference:
			"https://www.khanacademy.org/math/statistics-probability/probability-library/basic-theoretical-probability/a/probability-the-basics",
	},
	{
		term: "Multiple Dispatch",
		description:
			"Multiple dispatch or multimethods is a feature of some programming languages in which a function or method can be dynamically dispatched based on the run-time (dynamic) type or, in the more general case, some other attribute of more than one of its arguments.",
		reference: "https://en.wikipedia.org/wiki/Multiple_dispatch",
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
						</div>
					</div>
				</main>
			</DocsLayout>
		</div>
	);
};

export default Terminology;
