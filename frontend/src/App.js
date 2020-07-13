import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateCampaign from './components/CreateCampaign';
import ListCampaign from './components/ListCampaign';
import { Nav, Navbar } from 'react-bootstrap';
import EditCampaign from './components/EditCampaign';
import logo from './images/01.png';

function App() {
	return (
		<div className="App">
			<Router>
				<div className="container">
					<Navbar bg="light" expand="lg">
						<Navbar.Brand href="/">
							<img src={logo} width="130" exact height="50" alt="Tesa brand logo" />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/create">Create Campaign</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>

					<h1 className="header">KAMPAGNEN</h1>

					<Route path="/" exact component={ListCampaign} />
					<Route path="/edit/:id" exact component={EditCampaign} />
					<Route path="/create" exact component={CreateCampaign} />
				</div>
			</Router>
		</div>
	);
}

export default App;
