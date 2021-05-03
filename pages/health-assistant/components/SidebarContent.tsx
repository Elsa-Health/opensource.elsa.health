import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

interface SidebarContentProps {
	baseRoute?: string;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
	baseRoute = "health-assistant",
}) => {
	const { basePath, pathname, route } = useRouter();

	const isActivePath = (routeName: string) =>
		routeName === "/"
			? route.length < baseRoute.length + 2
				? true
				: false
			: route.includes(routeName);
	return (
		<div className="px-2 space-y-1">
			{/* <!-- Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:text-white hover:bg-cyan-600" --> */}
			<a
				href="#"
				className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-700 hover:text-primary"
				aria-current="page"
			>
				<svg
					className="mr-4 h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				About
			</a>
			<div className="ml-12 pb-4">
				<Link href={`/${baseRoute}`}>
					<a
						className={`flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary ${
							isActivePath("/") ? "text-primary" : ""
						}`}
						aria-current="page"
					>
						Getting Started
					</a>
				</Link>
				<Link href={`/${baseRoute}/concepts-and-terms`}>
					<a
						className={`flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary ${
							isActivePath("concepts-and-terms")
								? "text-primary"
								: ""
						}`}
						aria-current="page"
					>
						Terminology
					</a>
				</Link>
			</div>

			{/* <a
				className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-700 hover:text-primary"
			>
				<svg
					className="mr-4 h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
				Health Conditions
			</a>
			<div className="ml-12 pb-4">
				<Link href={`/${baseRoute}/health-conditions`}>
					<a
						className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
						aria-current="page"
					>
						Conditions Overview
					</a>
				</Link>
			</div> */}

			<a
				href="#"
				className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-700 hover:text-primary"
			>
				<svg
					className="mr-4 h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
					<path
						fill="#fff"
						d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
					/>
				</svg>
				Tutorials
			</a>
			<div className="ml-12 pb-4">
				<a
					href="https://www.simplilearn.com/react-native-tutorial-article"
					target="_blank"
					className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
					aria-current="page"
				>
					Getting Started with React Native
				</a>
				<a
					href="https://en.unesco.org/sites/default/files/unesco-pearson_draft_guidelines_for_digital_inclusion.pdf"
					target="_blank"
					className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
					aria-current="page"
				>
					Designing for unskilled populations
				</a>
				{/* <a
					href="https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
					target="_blank"
					className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
					aria-current="page"
				>
					Causal Inference in Statistics
				</a> */}
			</div>

			<a
				href="#"
				className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-700 hover:text-primary"
			>
				<svg
					className="mr-4 h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
					/>
				</svg>
				Deployment
			</a>
			{/* <div className="ml-12 pb-4">
				<a
					href="https://techytok.com/from-zero-to-julia-using-docker/"
					target="_blank"
					className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
					aria-current="page"
				>
					With Docker
				</a>
				<a
					href="https://gist.github.com/fonsp/38965d7595a5d1060e27d6ca2084778d"
					target="_blank"
					className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
					aria-current="page"
				>
					On Heroku
				</a>
			</div> */}
		</div>
	);
};

export default SidebarContent;
