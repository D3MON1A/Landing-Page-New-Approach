import React from "react";

export function Card() {
	const cardTitles = ["Title1", "Title2", "Title3", "Title4"];

	const cardList = cardTitles.map(function(cards, index) {
		return (
			<div key={index} className="card mx-3" style={{ width: "18rem" }}>
				<img
					src="https://coder.clothing/images/stories/virtuemart/product/reactjs-logo-sticker.jpg"
					className="card-img-top mt-2"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Learning React</h5>
					<p className="card-text">
						ReactJS is a stronger framework because of its ability
						to break down the complex interface and allow users to
						work on individual components. ReactJS comes with the
						core objective is to deliver the best rendering
						performance possible.
					</p>
					<a href="#" className="btn btn-primary">
						Learn more
					</a>
				</div>
			</div>
		);
	});

	return <div className="d-flex justify-content-around">{cardList}</div>;
}
