import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';

const Status = (props) => {
	switch (props.status) {
		case 'geplant':
			return (
				<p style={{ color: 'blue' }}>
					<span>&#9679;</span> {props.status}
				</p>
			);

		case 'laufend':
			return (
				<p style={{ color: 'green' }}>
					<span>&#9679;</span> {props.status}
				</p>
			);

		case 'in Bearbeitung':
			return (
				<p style={{ color: 'grey' }}>
					<span>&#9679;</span> {props.status}
				</p>
			);

		case 'abgelaufen':
			return (
				<p style={{ color: 'red' }}>
					<span>&#9679;</span> {props.status}
				</p>
			);

		default:
			return <p />;
	}
};

const Action = (props) => {
	if (props.status === 'geplant' || props.status === 'in Bearbeitung') {
		return (
			<a
				href="/"
				onClick={() => {
					props.deleteCampaign(props.campaign.campaign_id);
				}}
			>
				<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor">
					<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
					<path
						fillRule="evenodd"
						d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
					/>
				</svg>
			</a>
		);
	} else if (props.status === 'laufend') {
		return (
			<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-slash-circle" fill="currentColor">
				<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
				<path
					fillRule="evenodd"
					d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
				/>
			</svg>
		);
	} else {
		return <div />;
	}
};

const Exercise = (props) => (
	<tr key={props.campaign.campaign_id}>
		<td>{props.campaign.campaign_title}</td>
		<td>
			{' '}
			<Status status={props.campaign.status} />
		</td>
		<td>
			{props.campaign.creation_date.split('T')[0] +
				'-' +
				props.campaign.creation_date.split('T')[1].split(':')[0] +
				':' +
				props.campaign.creation_date.split('T')[1].split(':')[1]}
		</td>
		<td>{props.campaign.creation_user}</td>
		<td>
			<Link to={'/edit/' + props.campaign.campaign_id}>
				<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor">
					<path
						fillRule="evenodd"
						d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
					/>
					<path
						fillRule="evenodd"
						d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
					/>
				</svg>
			</Link>{' '}
			<Action status={props.campaign.status} campaign={props.campaign} deleteCampaign={props.deleteCampaign} />
		</td>
	</tr>
);

export default class ListCampaign extends Component {
	constructor(props) {
		super(props);

		this.deleteCampaign = this.deleteCampaign.bind(this);

		this.state = {
			campaigns: [],
			currentPage: 1,
			postsPerPage: 10,
			errorMessage: ''
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:5000/api/campaign`)
			.then((response) => {
				this.setState({ campaigns: response.data });
			})
			.catch((error) => {
				console.log(error.status);
				this.setState({ errorMessage: error.message });
			});
	}

	deleteCampaign(id) {
		axios.delete(`http://localhost:5000/api/campaign/${id}`).then((response) => {
			console.log(response.data);
		});

		this.setState({
			campaigns: this.state.campaigns.filter((el) => el.campaign_id !== id)
		});
	}

	exerciseList(currentCampaign) {
		return currentCampaign.map((campaign) => {
			return <Exercise campaign={campaign} deleteCampaign={this.deleteCampaign} key={campaign.campaign_id} />;
		});
	}

	render() {
		if (this.state.errorMessage) {
			// You can render any custom fallback UI
			return <h1>Server is not running.</h1>;
		}
		const { currentPage, postsPerPage } = this.state;

		const indexOfLastPost = currentPage * postsPerPage;
		const indexOfFirstPost = indexOfLastPost - postsPerPage;

		const currentCampaign = this.state.campaigns.slice(indexOfFirstPost, indexOfLastPost);
		const paginate = (pageNum) => this.setState({ currentPage: pageNum });
		const nextPage = () => this.setState({ currentPage: currentPage + 1 });
		const prevPage = () => this.setState({ currentPage: currentPage - 1 });

		return (
			<div>
				<table className="table table-hover">
					<thead className="thead-light">
						<tr>
							<th>Kampagnentitel</th>
							<th>Status</th>
							<th>Erstellungsdatum</th>
							<th>Erstellt von</th>
							<th />
						</tr>
					</thead>
					<tbody>{this.exerciseList(currentCampaign)}</tbody>
				</table>
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={this.state.campaigns.length}
					paginate={paginate}
					nextPage={nextPage}
					prevPage={prevPage}
					currentPage={currentPage}
				/>
			</div>
		);
	}
}
