import React from "react";

export function Footer() {
	return (
		<ul className="nav justify-content-center  bg-light mt-3 p-2">
			<li className="nav-item">
				<a
					className="nav-link disabled"
					href="#"
					tabIndex="-1"
					aria-disabled="true">
					<b>Leisy Arcia</b>
				</a>
			</li>
			<li className="nav-item">
				<a
					className="nav-link"
					href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
					leisyarcia@gmail.com
				</a>
			</li>
			<li className="nav-item">
				<a
					className="nav-link"
					href="https://www.linkedin.com/in/leisy-arcia/">
					LinkedIn
				</a>
			</li>
			<li className="nav-item">
				<a
					className="nav-link"
					href="https://github.com/leisyarcia"
					tabIndex="-1"
					aria-disabled="false">
					GitHub
				</a>
			</li>
		</ul>
	);
}
