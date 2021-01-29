import React from "react";
interface SidebarContentProps {}

const SidebarContent: React.FC<SidebarContentProps> = ({}) => (
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
			<a
				href="#"
				className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
				aria-current="page"
			>
				Getting Started
			</a>
			<a
				href="#"
				className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
				aria-current="page"
			>
				Terminology
			</a>
			<a
				href="#"
				className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
				aria-current="page"
			>
				Concepts
			</a>
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
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/>
			</svg>
			Health Conditions
		</a>
		<div className="ml-12 pb-4">
			<a
				href="#"
				className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
				aria-current="page"
			>
				Overviews
			</a>
			<a
				href="#"
				className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
				aria-current="page"
			>
				Symptom Matrices
			</a>
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
				href="#"
				className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
				aria-current="page"
			>
				Causal Modelling
			</a>
			<a
				href="#"
				className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
				aria-current="page"
			>
				Predicting conditions
			</a>
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
		<div className="ml-12 pb-4">
			<a
				href="#"
				className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
				aria-current="page"
			>
				With Docker
			</a>
			<a
				href="#"
				className="flex px-2 py-2 text-sm leading-6 rounded-md text-gray-700 hover:text-primary"
				aria-current="page"
			>
				On heroku
			</a>
		</div>

		{/* <a
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
					strokeWidth="2"
					d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
				/>
			</svg>
			Cards
		</a>

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
					strokeWidth="2"
					d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
			Recipients
		</a>

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
					strokeWidth="2"
					d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				/>
			</svg>
			Reports
		</a> */}
	</div>
);

export default SidebarContent;
