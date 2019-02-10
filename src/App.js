import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Feedback from './components/Feedback/Feedback';
import Services from './components/Services/Services';
import Quote from './components/Quote/Quote';
import Footer from './components/Footer';
import './resources/styles.css';
import './styles/servicestyles.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div>
						<Header className="navbar-fixed-top" />
					</div>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/services" component={Services} />
					<Route exact path="/freequote" component={Quote} />
					<Route exact path="/feedback" component={Feedback} />

					<div>
						<Footer />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
