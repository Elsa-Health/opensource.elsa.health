import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Footer from "./Footer";

type Props = {
	children?: ReactNode;
	title?: string;
};

const MainLayout = ({
	children,
	title = "Elsa Health | Healthcare for all",
}: Props) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<link
				rel="preload"
				href="/fonts/Avenir/AvenirLTStd-Book.otf"
				as="font"
				crossOrigin=""
			/>
			<link
				rel="preload"
				href="/fonts/Avenir/AvenirLTStd-Heavy.otf"
				as="font"
				crossOrigin=""
			/>
			<link
				rel="preload"
				href="/fonts/Avenir/AvenirLTStd-Medium.otf"
				as="font"
				crossOrigin=""
			/>
		</Head>
		<header
			style={{
				backgroundImage: `url("./double-bubble.png")`,
				backgroundColor: "#efefefbf",
				backgroundBlendMode: "darken",
			}}
		>
			{/* <header style={{ backgroundImage: `url("./qbkls.png")` }}> */}
			<nav className="flex flex-row justify-between container mx-auto">
				<Link href="/">
					<div className="flex items-center">
						<img src="./elsa-icon.svg" width="90" />
						<h1 className="text-xl">Elsa Health | Open Source</h1>
					</div>
				</Link>

				<div className="gap-3 items-center hidden md:flex">
					<Link href="/about">
						<a className="text-primary hover:underline">Github</a>
					</Link>
					<Link href="https://elsa.health">
						<a className="text-primary hover:underline">
							Elsa Health
						</a>
					</Link>
				</div>
			</nav>

			<div className="container text-center md:text-left mx-auto py-60 px-4 md:px-10">
				<h1 className="text-4xl md:text-6xl text-gray-800">
					Open Source Projects by Elsa Health
				</h1>
				<h1 className="text-lg text-gray-800 mt-2">
					{" "}
					Technology for health and wellness, for all.
				</h1>

				<div className="mt-6 flex justify-center md:justify-start gap-3">
					<button
						type="button"
						onClick={() =>
							(window.location.href = "https://elsa.health")
						}
						className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Elsa Health
					</button>
					{/* <button
						type="button"
						className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Github
					</button> */}
					<button
                        type="button"
                        onClick={() =>
							(window.location.href = "https://github.com/Elsa-Health/")
						}
						className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<svg
							// className="h-6 w-6"
							className="-ml-1 mr-3 h-5 w-5"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clipRule="evenodd"
							/>
						</svg>
						Github
					</button>
				</div>
			</div>
		</header>

		<div className="">{children}</div>
		<Footer />
	</div>
);

export default MainLayout;
