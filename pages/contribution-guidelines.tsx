const ContributionGuidelines = () => (
	<div className="container mx-auto py-10">
		<h2 className="text-3xl mb-2">Elsa Contribution Guidelines</h2>
		<p className="mb-2">
			We love your input! We want to make contributing to this project as
			easy and transparent as possible, whether it&#39;s:
		</p>
		<ul className="list-disc list-inside">
			<li>Reporting a bug</li>
			<li>Discussing the current state of the code</li>
			<li>Submitting a fix</li>
			<li>Proposing new features</li>
		</ul>
		<p className="mt-4 mb-2">
			There are 3 main kinds of contributions we are actively looking for:
		</p>
		<ol className="list-inside list-decimal">
			<li>
				Healthcare providers, researchers, and other health stakeholders
			</li>
			<li>
				Software developers and other health information technology
				stakeholders
			</li>
			<li>Human and other sentient beings</li>
		</ol>
		<br />
		<h3 className="text-xl">
			1. For Healthcare Personnel &amp; Researchers
		</h3>
		<div className="pl-4">
			<p>
				There are many ways to contribute and get involved. Here are a
				few we need support in:
			</p>
			<ul className="list-inside list-decimal">
				<li>Better ways to measure and test performance</li>
				<li>Suggestions on features to develop and include</li>
				<li>
					Identifying errors in how calculations &amp; predictions are
					made
				</li>
				<li>Suggestions for new diseases and conditions to include</li>
				<li>
					Development of symptom matrices, and case vignettes for
					patients
				</li>
				<li>
					Testing and auditing of models and decision making
					algorithms
				</li>
			</ul>
			<p className="mt-4">
				We also encourage you to think of any other ways you would love
				to contribute!
			</p>
		</div>
		<br />

		<h3 className="text-xl">2. For Developers</h3>
		<div className="pl-4">
			<h5 id="we-develop-with-github" className="mb-2">
				We Develop with Github
			</h5>
			<p>
				We use github to host code, to track issues and feature
				requests, have discussions, as well as accept pull requests.
			</p>
			<p>
				Then push your code to Github and make a pull request for a
				merge.
			</p>
			<h5 className="text-lg mt-2">
				We Use{" "}
				<a
					className="text-primary underline"
					href="https://guides.github.com/introduction/flow/index.html"
				>
					Github Flow
				</a>
				, So All Code Changes Happen Through Pull Requests
			</h5>
			<p>
				Pull requests are the best way to propose changes to the
				codebase (we use{" "}
				<a
					className="text-primary underline"
					href="https://guides.github.com/introduction/flow/index.html"
				>
					Github Flow
				</a>
				). We actively welcome your pull requests:
			</p>
			<ol className="list-inside list-decimal">
				<li>
					Fork the repo and create your branch from <code>main</code>.
				</li>
				<li>
					If you&#39;ve added code that should be tested, add tests.
				</li>
				<li>If you&#39;ve changed APIs, update the documentation.</li>
				<li>Ensure the test suite passes.</li>
				<li>Make sure your code lints.</li>
				<li>Issue that pull request!</li>
			</ol>
			<h5 className="mt-3">
				Report bugs using Github&#39;s{" "}
				<a href="https://github.com/Elsa-Health/elsa-models/issues">
					issues
				</a>
			</h5>
			<p className="mt-1">
				We use GitHub issues to track public bugs. Report a bug by{" "}
				<a href="">opening a new issue</a>; it&#39;s that easy!
			</p>
			<p className="mt-3">
				<strong>Great Bug Reports</strong> tend to have:
			</p>
			<ul className="list-disc list-inside">
				<li className="my-1">A quick summary and/or background</li>
				<li className="my-1">
					Steps to reproduce
					<ul className="list-disc list-inside pl-4">
						<li className="my-1">Be specific!</li>
						<li className="my-1">
							Give sample code if you can. (TODO: Add Example)
						</li>
					</ul>
				</li>
				<li className="my-1">What you expected would happen</li>
				<li className="my-1">What actually happens</li>
				<li className="my-1">
					Notes (possibly including why you think this might be
					happening, or stuff you tried that didn&#39;t work)
				</li>
			</ul>
			<p>
				People <em>love</em> thorough bug reports. I&#39;m not even
				kidding.
			</p>
		</div>
		<br />
		<h3 className="text-xl">3. For Humans and other beings</h3>
		<p>
			Send us emails or tweet us (@elsa.health) with you grandest ideas on
			how we can achieve a disease free and healthy future for humanity.
		</p>
		<br />
		<hr />
		<br />
		<p>
			This document was adapted from{" "}
			<a href="https://gist.github.com/briandk/3d2e8b3ec8daf5a27a62">
				Brandk&#39;s
			</a>{" "}
			awesome adaptation of the open-source contribution guidelines for{" "}
			<a href="https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md">
				Facebook&#39;s Draft
			</a>
		</p>
	</div>
);

export default ContributionGuidelines;
