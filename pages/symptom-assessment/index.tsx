import Link from "next/link";
import DocsLayout from "../../components/DocsLayout";
import Footer from "../../components/Footer";
import SidebarContent from "./components/SidebarContent";

const SymptomAssessmentIndex = () => (
	<div>
		<DocsLayout
			sidebar={<SidebarContent />}
			sidebarTitle="Symptom Assessment"
			title="Elsa Health | Symptom Assessment"
		>
			<main className="flex-1 relative pb-8 z-0 overflow-y-auto container px-14 py-14 text-gray-800">
				<h1 className="text-3xl">Getting Started</h1>

				<div className="mt-3 flex flex-col gap-5">
					<h1 className="text-xl font-medium">Overview</h1>
					<p>
						<a
							className="text-primary"
							href="https://elsa.health"
							target="_blank"
						>
							Elsa Health
						</a>{" "}
						Symptom Assessment algorithms are a collection of causal
						models that can be used for health decision making
						support at all levels of healthcare providers.
					</p>
					<p>
						The main intention of these models is to support
						healthcare workers at the rural (and urban) dispensary
						level by taking in patient signs, symptoms and risk
						factors, and calculating the likelihood of one of the
						covered conditions.
					</p>
					<p>
						<a
							className="text-primary"
							href="https://elsa.health"
							target="_blank"
						>
							Elsa Health
						</a>{" "}
						as an organization is commited to equal access to
						healthcare for all. We do this the best way we know how,
						by building technologies to augment the capacity and
						skills of decision makers (healthcare workers,
						governments, researchrs, parents, guardians, and
						individuals) to support optimal decision making. Disease
						should be a thing of the past
					</p>
					<p>
						<h1 className="text-lg font-medium">Project Goals</h1>
						<ul className="list-disc list-inside pl-6 mt-2">
							<li>
								Support developers of health technologies to
								quickly add symptom assessment capabilities to
								their technolgies
							</li>
							<li>
								Ensure Africa and her specific diseases are
								included when symptom assessment is being
								performed.
							</li>
							<li>
								Allow developers from all over the world to
								include African (currently only East African)
								diseases and their presentations.
							</li>
							<li>
								Grow a community of humans that want to leverage
								technology to make better health decision making
								is available everywhere technology can reach.
							</li>
						</ul>
					</p>
					<h1 className="text-xl font-medium">Quick Start</h1>
					{/* TODO: add links to the correct pages */}
					Install the requirements
					<ul className="list-disc list-inside pl-6 mt-2">
						<li>
							Julia v. 1.4.2 (important: breaks when running on
							julia 1.5+)
						</li>
						<li>Distributions.jl</li>
						<li>Omega.jl - Causal & Counterfactual inference</li>
						<li>To run the server HTTP.jl</li>
						<li>
							To visualise results & distributions UnicodePlots.jl
						</li>
						<li>To send back results from the server JSON2.jl</li>
					</ul>
					Quickly launch the server
					<ul className="list-disc list-inside pl-6 mt-2">
						<li>
							Change directories into this project: cd
							path/to/folder
						</li>
						<li>
							<code>julia --project=@. ./src/server.jl</code> to
							activate the current project and start the server
						</li>
						<li>To stop the server simply press Ctrl+C</li>
					</ul>
					<h1 className="text-xl font-medium">Contribution</h1>
					We love your input! We want to make contributing to this
					project as easy and transparent as possible, whether it's:
					<ul className="list-disc list-inside pl-6 mt-2">
						<li>Reporting a bug</li>
						<li>Discussing the current state of the code</li>
						<li>Submitting a fix</li>
						<li>Proposing new features</li>
						<li>Becoming a maintainer</li>
					</ul>
					If you want to contribute through code or documentation, the
					Contributing guide is the best place to start. If you have
					questions, feel free to ask. This project adheres to Elsa
					Health's code of conduct. By participating, you are expected
					to uphold this code.
					<h1 className="text-xl font-medium">Acknowledgements</h1>
					<p>
						This work would not be possible without the generous
						support and guidance from our funders, mentors and
						partners.
						{/* TODO: Add list of people and organizations to mention */}
					</p>
				</div>
				<div className="mt-10">
					<Footer />
				</div>
			</main>
		</DocsLayout>
	</div>
);

export default SymptomAssessmentIndex;
