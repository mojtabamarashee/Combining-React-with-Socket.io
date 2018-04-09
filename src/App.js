import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './test';


class App extends Component {

	constructor(props) {
	  super(props);

	  subscribeToTimer((err, timestamp) => this.setState({ 
		timestamp 
	  }));
	}

	state = {
		timestamp: 'no timestamp yet'
	};

	render() {
	  return (
		<div className="App">
		  <p className="App-intro">
		  This is the timer value: {this.state.timestamp}
		  </p>
		</div>
	  );
	}
}

export default App;
