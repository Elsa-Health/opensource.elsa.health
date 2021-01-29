import React, { ReactNode } from "react";
import Head from "next/head";
import { Transition } from "@headlessui/react";

type Props = {
	sidebar?: ReactNode;
	children?: ReactNode;
	sidebarTitle?: String;
	title?: string;
};

const DocsLayout = ({
	children,
	title = "Elsa Health | Healthcare for all",
	sidebar,
	sidebarTitle = "Elsa Health",
}: Props) => {
	const [sideBarOpen, toggleSideBar] = React.useState(true);
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>

			<div className="h-screen flex overflow-hidden text-gray-800">
				{/* <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. --> */}
				<div className="lg:hidden">
					<div
						className={`fixed inset-0 flex ${
							sideBarOpen && "z-40"
						}`}
					>
						<Transition
							show={sideBarOpen}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							{(ref) => (
								<>
									<div ref={ref} className="fixed inset-0">
										<div
											className="absolute inset-0 bg-gray-600 opacity-75"
											aria-hidden="true"
										></div>
									</div>
									<Transition
										show={sideBarOpen}
										enter="transition ease-in-out duration-300 transform"
										enterFrom="-translate-x-full"
										enterTo="translate-x-0"
										leave="transition ease-in-out duration-300 transform"
										leaveFrom="translate-x-0"
										leaveTo="-translate-x-full"
									>
										{(ref) => (
											<div
												ref={ref}
												className="relative flex-1 flex flex-col max-w-xs w-full h-full pt-5 pb-4 bg-gray-200"
											>
												<div className="absolute top-0 right-0 -mr-12 pt-2">
													<button
														onClick={() =>
															toggleSideBar(
																!sideBarOpen
															)
														}
														className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
													>
														<span className="sr-only">
															Close sidebar
														</span>
														{/* <!-- Heroicon name: x --> */}
														<svg
															className="h-6 w-6 text-white"
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
																d="M6 18L18 6M6 6l12 12"
															/>
														</svg>
													</button>
												</div>
												<div className="flex-shrink-0 flex items-center px-4">
													<img
														src="./elsa-icon.svg"
														width="90"
													/>
													<h1 className="text-xl">
														{sidebarTitle}
													</h1>
												</div>
												<nav
													className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
													aria-label="Sidebar"
												>
													{sidebar}
												</nav>
											</div>
										)}
									</Transition>
									<div
										className="flex-shrink-0 w-14"
										aria-hidden="true"
									>
										{/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
									</div>
								</>
							)}
						</Transition>
					</div>
				</div>

				{/* <!-- Static sidebar for desktop --> */}
				<div className="hidden lg:flex lg:flex-shrink-0">
					<div className="flex flex-col w-72">
						{/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
						<div className="flex flex-col flex-grow bg-gray-200 pt-5 pb-4 overflow-y-auto">
							<div className="flex items-center flex-shrink-0 px-4">
								<img src="./elsa-icon.svg" width="90" />
								<h1 className="text-xl text-primary">{sidebarTitle}</h1>
							</div>
							<nav
								className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
								aria-label="Sidebar"
							>
								{sidebar}
							</nav>
						</div>
					</div>
				</div>

				<div
					className="flex-1 overflow-auto focus:outline-none"
					tabIndex={0}
				>
					<div className="relative z-10 flex-shrink-0 flex bg-white border-b border-gray-200 lg:border-none">
						<button
							onClick={() => toggleSideBar(true)}
							className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
						>
							<span className="sr-only">Open sidebar</span>
							<svg
								className="h-6 w-6"
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
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</button>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default DocsLayout;
