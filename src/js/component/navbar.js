import React from "react";

export function Navbar() {
	return (
		<div className="text-center mt-5">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a
					className="navbar-brand"
					href="https://reactjs.org/tutorial/tutorial.html">
					Intro
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-item nav-link active"
							href="https://reactjs.org/docs/getting-started.html#learn-react">
							Learn React{" "}
							<span className="sr-only">(current)</span>
						</a>
						<a
							className="nav-item nav-link"
							href="https://reactjs.org/docs/react-component.html">
							Components
						</a>
						<a
							className="nav-item nav-link"
							href="https://reactjs.org/docs/hooks-intro.html">
							Hooks
						</a>
						<a
							className="nav-item nav-link"
							href="https://reactjs.org/docs/testing.html"
							tabIndex="-1"
							aria-disabled="false">
							Testing
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}
