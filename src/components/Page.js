import React from "react";
import Review from "./Review";

const Page = (props) => {
	if (props.loading) {
		return (
			<div className="container d-flex justify-content-around mt-5 ">
				<div
					className="spinner-border text-primary"
					role="status"
					style={{ width: "3rem", height: "3rem" }}
				>
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	}
	const reviews = props.reviews.map((review) => (
		<Review
			key={review.user_id + toString(review.reviewer.timestamp)}
			title={review.title}
			comment={review.comment}
			confStartDate={review.confStartDate}
			usefulness={review.usefulness}
			name={review.reviewer.name}
			ratings={review.ratings}
			friend={review.friend}
		/>
	));
	return (
		<div className="container d-flex justify-content-around mt-5 ">
			<div className="list-group">{reviews}</div>
		</div>
	);
};

export default Page;
