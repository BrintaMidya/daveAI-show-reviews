import React from "react";

class App extends React.Component {
	state = { showMore: false };

	getStars = (rating) => {
		let stars = [];
		for (let i = 0; i < rating; i++) {
			stars.push(
				<svg
					key={i}
					width="1em"
					height="1em"
					viewBox="0 0 16 16"
					className="bi bi-star-fill"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
				</svg>
			);
		}
		for (let i = rating; i < 5; i++) {
			stars.push(
				<svg
					key={i}
					width="1em"
					height="1em"
					viewBox="0 0 16 16"
					className="bi bi-star"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
					/>
				</svg>
			);
		}
		return <span>{stars}</span>;
	};

	render() {
		return (
			<div className="card mb-3">
				<div className="list-group-item">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">{this.props.title}</h5>
						<small className="text-muted">
							{this.props.friend ? this.props.name : "user"}
						</small>
					</div>
					<p className="mb-1">{this.props.comment}</p>
					<small className="text-muted">
						usefulness : {"   "}
						{this.props.usefulness}
					</small>
					<div className="list-group mt-2">
						<div className="list-group-item">
							<p className="mb-1">
								Overall Ratings : {"   "}
								{this.getStars(this.props.ratings.Overall)}
							</p>
						</div>
						{this.state.showMore ? (
							<div>
								<div className="list-group-item">
									<p className="mb-1">
										Delivery Time : {"   "}
										{this.getStars(this.props.ratings.delivery_time)}
									</p>
								</div>
								<div className="list-group-item">
									<p className="mb-1">
										Discounts and Offers : {"   "}
										{this.getStars(this.props.ratings.discounts_and_offers)}
									</p>
								</div>
								<div className="list-group-item">
									<p className="mb-1">
										Matches Description : {"   "}
										{this.getStars(this.props.ratings.matches_description)}
									</p>
								</div>
								<div className="list-group-item">
									<p className="mb-1">
										Matches Photo : {"   "}
										{this.getStars(this.props.ratings.matches_photo)}
									</p>
								</div>
								<div className="list-group-item">
									<p className="mb-1">
										Packaging : {"   "}
										{this.getStars(this.props.ratings.packaging)}
									</p>
								</div>
								<div className="list-group-item">
									<p className="mb-1">
										Price : {"   "}
										{this.getStars(this.props.ratings.price)}
									</p>
								</div>
							</div>
						) : (
							""
						)}
						<a
							onClick={() => {
								if (this.state.showMore) {
									this.setState({ showMore: false });
								} else {
									this.setState({ showMore: true });
								}
							}}
							href="#!"
						>
							{this.state.showMore ? "show less" : "show more"}
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
