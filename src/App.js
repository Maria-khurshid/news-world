import './App.css';
import React, { Component } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Pakistan from './components/Pakistan';
import Entertainment from './components/Entertainment';
import Sports from './components/Sports';
import Technology from './components/Technology';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<div
				className="App"
				style={{
					margin: '0%',
					padding: '0%',
				}}
			>
				<header className="App-header">
					<NavBar />
				</header>
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/Home" component={Home} />
						<Route path="/Pakistan" component={Pakistan} />
						<Route path="/Entertainment" component={Entertainment} />
						<Route path="/Sports" component={Sports} />
						<Route path="/Technology" component={Technology} />
					</Switch>
				</Router>
			</div>
		);
	}
}
