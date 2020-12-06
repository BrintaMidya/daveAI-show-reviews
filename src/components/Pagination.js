import React from "react";

const Pagination = ({
	currentPage,
	reviewsPerPage,
	totalReviews,
	paginate,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className="nav nav justify-content-center">
			<div className="nav-item">
				<div className="pagination mt-5 mb-5">
					{pageNumbers.map((number) => (
						<li
							key={number}
							className={
								currentPage === number ? "page-item active" : "page-item"
							}
						>
							<a
								onClick={() => paginate(number)}
								href="#/"
								className="page-link"
							>
								{number}
							</a>
						</li>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Pagination;
