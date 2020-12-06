import React from "react";
import Page from "./Page";
import SearchFilter from "./SearchFilter";
import Pagination from "./Pagination";

class App extends React.Component {
	state = { reviews: [], loading: false, currentPage: 1, reviewsPerPage: 3 };

	fetchReviews = (productID, viwerID) => {
		this.setState({ loading: true });
		const proxyUrl = "https://cors-anywhere.herokuapp.com/";
		const url = `http://www.i2ce.in/reviews/${productID}/${viwerID}`;
		console.log("fetching data from", url);
		fetch(proxyUrl + url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.setState({ reviews: data.reviews });
				this.setState({ loading: false });
			})
			.catch((error) => {
				console.error(
					"There has been a problem with your fetch operation:",
					error
				);
				alert("Error feching data from server ! please try again later");
			});
	};
	paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

	sortByRating = () => {
		this.setState({ loading: true });
		let newArray = this.state.reviews;
		newArray.sort((a, b) => (a.ratings.Overall < b.ratings.Overall ? 1 : -1));
		this.setState({ reviews: newArray, currentPage: 1, loading: false });
	};

	sortByConnection = () => {
		this.setState({ loading: true });
		let newArray = this.state.reviews;
		newArray.sort((a, b) =>
			a.reviewer.connection_level < b.reviewer.connection_level ? 1 : -1
		);
		this.setState({ reviews: newArray, currentPage: 1, loading: false });
	};

	sortByUsefulness = () => {
		this.setState({ loading: true });
		let newArray = this.state.reviews;
		newArray.sort((a, b) => (a.usefulness < b.usefulness ? 1 : -1));
		this.setState({ reviews: newArray, currentPage: 1, loading: false });
	};

	render() {
		const indexOfLastPost = this.state.currentPage * this.state.reviewsPerPage;
		const indexOfFirstPost = indexOfLastPost - this.state.reviewsPerPage;
		const currentReviews = this.state.reviews.slice(
			indexOfFirstPost,
			indexOfLastPost
		);

		return (
			<div className="container">
				<SearchFilter
					onSearchSubmit={this.fetchReviews}
					sortByRating={this.sortByRating}
					sortByConnection={this.sortByConnection}
					sortByUsefulness={this.sortByUsefulness}
				/>
				<Page reviews={currentReviews} loading={this.state.loading} />
				<Pagination
					currentPage={this.state.currentPage}
					reviewsPerPage={this.state.reviewsPerPage}
					totalReviews={this.state.reviews.length}
					paginate={this.paginate}
				/>
			</div>
		);
	}
}

export default App;
