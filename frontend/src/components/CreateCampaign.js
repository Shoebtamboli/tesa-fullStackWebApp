import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateCampaign extends Component {
	constructor(props) {
		super(props);

		this.onChangeUser = this.onChangeUser.bind(this);
		this.onChangeStatus = this.onChangeStatus.bind(this);
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			campaign_title: '',
			status: '',
			creation_date: new Date(),
			creation_user: ''
		};
	}

	onChangeTitle(e) {
		this.setState({
			campaign_title: e.target.value
		});
	}

	onChangeStatus(e) {
		this.setState({
			status: e.target.value
		});
	}

	onChangeUser(e) {
		this.setState({
			creation_user: e.target.value
		});
	}

	onChangeDate(date) {
		this.setState({
			creation_date: date
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const campaign = {
			campaign_title: this.state.campaign_title,
			status: this.state.status,
			creation_date: this.state.creation_date,
			creation_user: this.state.creation_user
		};

		console.log(campaign);

		axios.post('http://localhost:5000/api/campaign', campaign).then((res) => console.log(res.data));

		window.location = '/';
	}

	render() {
		return (
			<div>
				<h3>Create New Campaign</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Kampagnentitel </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.campaign_title}
							onChange={this.onChangeTitle}
						/>
					</div>
					<div className="form-group">
						<label>Status </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.status}
							onChange={this.onChangeStatus}
						/>
					</div>

					<div className="form-group">
						<label>Erstellungsdatum </label>
						<div>
							<DatePicker selected={this.state.creation_date} onChange={this.onChangeDate} />
						</div>
					</div>

					<div className="form-group">
						<label>Erstellt von </label>
						<input
							type="text"
							className="form-control"
							value={this.state.creation_user}
							onChange={this.onChangeUser}
						/>
					</div>

					<div className="form-group">
						<input type="submit" value="Submit Campaign" className="btn btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}
