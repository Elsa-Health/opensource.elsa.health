import Link from "next/link";
import Layout from "../components/MainLayout";

const IndexPage = () => (
	<Layout title="Elsa Health Open Source | Healthcare for all">
		<div className="container mx-auto py-16 pb-24">
			<h1 className="text-lg text-center md:text-left md:text-xl text-gray-700">
				Featured Projects
			</h1>

			<div className="flex flex-col items-center md:flex-row gap-5 py-8">
				<img
					src="data_reports.svg"
					className="w-8/12 px-10 md:w-4/12 lg:w-2/12"
				/>
				<div className="w-8/12">
					<h1 className="text-xl pb-3 font-semibold md:text-3xl text-gray-800  text-center md:text-left">
						Elsa Health Symptom Assessment
					</h1>
					<p className="pb-3 text-justify md:text-left">
						Elsa Health Symptom Assessment algorithms are a
						collection of causal models that can be used for health
						decision making support at all levels of healthcare
						providers.
					</p>
					<p className="text-justify md:text-left">
						The main intention of these models is to support
						healthcare workers at the rural (and urban) dispensary
						level by taking in patient signs, symptoms and risk
						factors, and calculating the likelihood of one of the
						covered conditions.
					</p>

					<div className="mt-3 flex flex-row gap-5">
						<Link href="/symptom-assessment">
							<a className="font-medium text-primary hover:text-indigo-500">
								Documentation
							</a>
						</Link>

						<Link href="/symptom-assessment">
							<a className="font-medium text-primary hover:text-indigo-500">
								Github
							</a>
						</Link>
					</div>
				</div>
			</div>

			<hr className="my-12 md:hidden" />

			{/* Elsa mobile tool */}
			<div className="flex flex-col items-center md:flex-row gap-5 py-8">
				<img
					src="app_assistant.svg"
					className="w-8/12 px-10 md:w-4/12 lg:w-2/12"
				/>
				<div className="w-8/12">
					<h1 className="text-xl pb-3 font-semibold md:text-3xl text-gray-800  text-center md:text-left">
						Elsa Health Assistant
					</h1>
					<p className="pb-3 text-justify md:text-left">
						The Elsa Health Assistant is an android application that
						can be deployed with healthcare providers across levels
						of care to collect information on patients signs,
						symptoms, and risk factors. Paired with Elsa's Symptom
						Assessment algorithms, healthcare providers use the
						application to receive insights on the likely cause of a
						patients symptoms.
					</p>
					<p className="text-justify md:text-left">
						The application supports multiple languages, and is
						currently available in English and Swahili. Additional
						features include a patient file, which allows providers
						track patients over time.
					</p>

					<div className="mt-3 flex flex-row gap-5">
						<Link href="/symptom-assessment">
							<a className="font-medium text-primary hover:text-indigo-500">
								Documentation
							</a>
						</Link>

						<Link href="/symptom-assessment">
							<a className="font-medium text-primary hover:text-indigo-500">
								Github
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
		<div className="bg-gray-100 py-8 pb-20">
			<div className="container mx-auto px-6 py-2">
				<h1 className="text-lg md:text-xl text-center md:text-left text-gray-700 mt-14">
					Other Projects
				</h1>

				<div className="flex flex-col gap-4 md:flex-row mt-4">
					{/* Milestone Assessment */}
					<div className="bg-white shadow sm:rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<h3 className="text-lg leading-6 font-medium text-gray-900">
								Milestone Assessment
							</h3>
							<div className="mt-2 max-w-xl text-sm text-gray-500">
								<p>
									Support the assessment of key development
									milestones of children under the age of 14.
								</p>
							</div>
							<div className="mt-3 text-sm flex gap-5">
								<a
									href="https://childmilestones.elsa.health/"
									target="_blank"
									className="font-medium text-primary hover:text-indigo-500"
								>
									Open Website{" "}
								</a>

								<a
									href="https://github.com/Elsa-Health/milestone-tracker-site"
									target="_blank"
									className="font-medium text-primary hover:text-indigo-500"
								>
									Docs
								</a>

								<a
									href="https://github.com/Elsa-Health/milestone-tracker-site"
									target="_blank"
									className="font-medium text-primary hover:text-indigo-500"
								>
									Github
								</a>
							</div>
						</div>
					</div>

					{/* Pediatric Form */}
					<div className="bg-white shadow sm:rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<h3 className="text-lg leading-6 font-medium text-gray-900">
								Pediatric Intake Form
							</h3>
							<div className="mt-2 max-w-xl text-sm text-gray-500">
								<p>
									Digital pediatric patient assessment intake
									form to support data collection at points of
									care.
								</p>
							</div>
							<div className="mt-3 text-sm flex gap-5">
								<a
									href="https://github.com/Elsa-Health/pediatric-assessment-intake-form"
									target="_blank"
									className="font-medium text-primary hover:text-indigo-500"
								>
									Docs
								</a>

								<a
									href="https://github.com/Elsa-Health/pediatric-assessment-intake-form"
									target="_blank"
									className="font-medium text-primary hover:text-indigo-500"
								>
									Github
								</a>
							</div>
						</div>
					</div>

					{/* Bayesian Logistic Regressor */}
					<div className="bg-white shadow sm:rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<h3 className="text-lg leading-6 font-medium text-gray-900">
								Bayesian Logistic Regressor
							</h3>
							<div className="mt-2 max-w-xl text-sm text-gray-500">
								<p>
									Perform logistic regression with
									uncertainities by defining your coefficients
									with Normal Distributions.
								</p>
							</div>
							<div className="mt-3 text-sm flex gap-5">
								<a
									href="https://github.com/Elsa-Health/bayesian-logistic-regressor"
									target="_blank"
									className="font-medium text-primary hover:text-indigo-500"
								>
									Docs
								</a>

								<a
									href="https://github.com/Elsa-Health/bayesian-logistic-regressor"
									target="_blank"
									className="font-medium text-primary hover:text-indigo-500"
								>
									Github
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
