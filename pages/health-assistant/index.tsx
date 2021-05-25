import DocsLayout from "../../components/DocsLayout";
import Footer from "../../components/Footer";
import SidebarContent from "./components/SidebarContent";

const SymptomAssessmentIndex = () => (
	<div data-testId="SymptomAssessmentIndex">
		<DocsLayout
			sidebar={<SidebarContent />}
			sidebarTitle="Mobile Health Assistant"
			title="Elsa Health | Health Assistant"
		>
			<main className="flex-1 relative pb-8 z-0 overflow-y-auto mx-auto container px-14 py-6 text-gray-800">
				{/* <h1 className="text-3xl">Concepts & Terms</h1> */}

				<div className="bg-gray-50">
					<div className="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
						<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
							Getting Started
						</h2>
						<div className="mt-6">
							<div className="mt-3 flex flex-col gap-5">
								<h1 className="text-xl font-medium">
									Overview
								</h1>
								<p>
									<a
										className="text-primary"
										href="https://elsa.health"
										target="_blank"
									>
										Elsa Health
									</a>{" "}
									Symptom Assessment algorithms are a
									collection of causal models that can be used
									for health decision making support at all
									levels of healthcare providers.
								</p>
								<p>
									The main intention of these models is to
									support healthcare workers at the rural (and
									urban) dispensary level by taking in patient
									signs, symptoms and risk factors, and
									calculating the likelihood of one of the
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
									as an organization is commited to equal
									access to healthcare for all. We do this the
									best way we know how, by building
									technologies to augment the capacity and
									skills of decision makers (healthcare
									workers, governments, researchrs, parents,
									guardians, and individuals) to support
									optimal decision making. Disease should be a
									thing of the past
								</p>
								<p>
									<h1 className="text-lg font-medium">
										Project Goals
									</h1>
									<ul className="list-disc list-inside pl-6 mt-2">
										<li>
											Support developers of health
											technologies to quickly adopt our
											technology for their own deployment
											needs
										</li>
										<li>
											Ensure Africa and her specific
											diseases are included when symptom
											assessment is being performed.
										</li>
										<li>
											Allow developers from all over the
											world to include African (currently
											only East African) diseases and
											their presentations.
										</li>
										<li>
											Grow a community of humans that want
											to leverage technology to make
											better health decision making is
											available everywhere technology can
											reach.
										</li>
									</ul>
								</p>
								<h1 className="text-xl font-medium">
									Quick Start
								</h1>
								<p>
									This project is Android only, and support
									for ios application is not prioritized at
									all. If you are interested in supporting
									iOS, please submit a pull request and we
									would be happy to merge it!
								</p>
								Install the requirements
								<ul className="list-disc list-inside pl-6 mt-2">
									<li>
										Install React Native on your local
										machine:{" "}
										<a
											href="https://reactnative.dev/docs/getting-started"
											target="_blank"
											className="text-primary"
										>
											Instructions here
										</a>
									</li>
									<li>
										Install Typescript on your machine:{" "}
										<a
											href="https://www.typescriptlang.org/download"
											target="_blank"
											className="text-primary"
										>
											Instructions here
										</a>
									</li>
									<li>
										Clone the repo:{" "}
										<code>
											git clone
											git@github.com:Elsa-Health/elsa-models.git
										</code>
									</li>
									<li>
										Change directories into this project: cd
										path/to/folder
									</li>
									<li>
										<code>yarn</code> to install the project
										dependencies, this could take a few
										minutes
									</li>
									<li>
										<code>yarn android && yarn start</code>{" "}
										to start the app on your connected
										(android only) device or emulator
									</li>
								</ul>
								<h1 className="text-xl font-medium">
									Contribution
								</h1>
								We love your input! We want to make contributing
								to this project as easy and transparent as
								possible, whether it's:
								<ul className="list-disc list-inside pl-6 mt-2">
									<li>Reporting a bug</li>
									<li>
										Discussing the current state of the code
									</li>
									<li>Submitting a fix</li>
									<li>Proposing new features</li>
									<li>Becoming a maintainer</li>
								</ul>
								If you want to contribute through code or
								documentation, the Contributing guide is the
								best place to start. If you have questions, feel
								free to ask. This project adheres to Elsa
								Health's code of conduct. By participating, you
								are expected to uphold this code.
								<h1 className="text-xl font-medium">
									Acknowledgements
								</h1>
								<p>
									This work would not be possible without the
									generous support and guidance from our
									funders, mentors and partners.
									{/* TODO: Add list of people and organizations to mention */}
								</p>
							</div>
							<div className="mt-10">
								<Footer />
							</div>
						</div>
					</div>
				</div>
			</main>
		</DocsLayout>
	</div>
);

export default SymptomAssessmentIndex;
