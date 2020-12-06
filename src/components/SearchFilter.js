import React from "react";

class SearchFilter extends React.Component {
	state = {
		productID: null,
		viewerID: null,
		ratingBtnActive: false,
		UsefulnessBtnActive: false,
		connectionBtnActive: false,
	};

	handleSubmit = (event) => {
		event.preventDefault(0);
		if (this.state.productID && this.state.viewerID) {
			this.props.onSearchSubmit(this.state.productID, this.state.viewerID);
		} else {
			console.log(this.state.productID, this.state.viewerID);
		}
	};

	onClickRating = () => {
		this.setState({
			ratingBtnActive: true,
			UsefulnessBtnActive: false,
			connectionBtnActive: false,
		});
		this.props.sortByRating();
	};

	onClickConnection = () => {
		this.setState({
			ratingBtnActive: false,
			UsefulnessBtnActive: false,
			connectionBtnActive: true,
		});
		this.props.sortByConnection();
	};

	onClickUsefulness = () => {
		this.setState({
			ratingBtnActive: false,
			UsefulnessBtnActive: true,
			connectionBtnActive: false,
		});
		this.props.sortByUsefulness();
	};

	render() {
		return (
			<div>
				<nav className="nav justify-content-center">
					<li className="nav-item">
						<form className="form-inline mt-3" onSubmit={this.handleSubmit}>
							<select
								className="custom-select my-1 mr-sm-2"
								defaultValue={this.state.productID}
								onChange={(e) => {
									this.setState({ productID: e.target.value });
								}}
							>
								<option>Select Product ID</option>
								{[...Array(20).keys()].map((i) => {
									return (
										<option key={i + 1} value={i + 1}>
											Product {i + 1}
										</option>
									);
								})}
							</select>
							<select
								className="custom-select my-1 mr-sm-2"
								defaultValue={this.state.viewerID}
								onChange={(e) => {
									this.setState({ viewerID: e.target.value });
								}}
							>
								<option>Select Viewer ID</option>
								{[...Array(10).keys()].map((i) => {
									return (
										<option key={i + 1} value={i + 1}>
											Viewer {i + 1}
										</option>
									);
								})}
							</select>
							<button type="submit" className="btn btn-primary my-1">
								Submit
							</button>
						</form>
					</li>
				</nav>
				<nav className="nav nav justify-content-center mt-3">
					<li className="nav-item mr-2 ml-2 mt-2">
						<h5>Sort By</h5>
					</li>
					<li className="nav-item mr-2 ml-2 mt-2">
						<button
							onClick={this.onClickRating}
							type="button"
							className={
								this.state.ratingBtnActive
									? "btn btn-primary"
									: "btn btn-outline-primary"
							}
						>
							Rating
						</button>
					</li>
					<li className="nav-item mr-2 ml-2 mt-2">
						<button
							onClick={this.onClickConnection}
							type="button"
							className={
								this.state.connectionBtnActive
									? "btn btn-primary"
									: "btn btn-outline-primary"
							}
						>
							Connection
						</button>
					</li>
					<li className="nav-item mr-2 ml-2 mt-2">
						<button
							onClick={this.onClickUsefulness}
							type="button"
							className={
								this.state.UsefulnessBtnActive
									? "btn btn-primary"
									: "btn btn-outline-primary"
							}
						>
							Usefulness
						</button>
					</li>
				</nav>
			</div>
		);
	}
}

export default SearchFilter;
