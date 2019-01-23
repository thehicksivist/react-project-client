import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  
	render() {
	  return (
		<div className="App">
		{
			<Router>
				<div>
				<Route path="/" render={(props) => (
					// do we need props? 
					// highlighted item on navbar
					<Header/>
				)} />
				
				<Route exact path="/home" render={() => {
					return 'home'
					// slides, packages, map
				}} />

				<Route exact path="/about" render= {() => {
					return 'about'
					// image, text
				}} />

				<Route exact path="/services" render={() => {
					return 'services'
					// list of services, categories?? details??
				}} />

				<Route exact path="/contact" render={() => {
					return 'contact'
					// text, contact form
				}} />

				<Route exact path="/freequote" render={() => {
					return 'free quote'
					// disclaimer/text details, quote form
				}} />

				<Route path="/" render={(props) => (
					// do we need props for footer?
					<Footer/>
				)} />
				</div>
			</Router>
			}
		</div>
	  );
	}

}
  
export default App;
