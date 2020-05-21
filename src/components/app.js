import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Helmet from 'preact-helmet';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for routes
import Intro from '../routes/intro';
import Who from '../routes/who';
import What from '../routes/what';
import Work from '../routes/work';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Helmet
					defaultTitle={"ReconCubed"}
					titleTemplate={"%s - ReconCubed"}
					link={[
						{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap'}
					]}
				/>
				<Header />

				<Router onChange={this.handleRoute}>
					<Intro path="/" />
					<Who path="/who"/>
					<What path="/what"/>
					<Work path="/work"/>
				</Router>
				<Footer/>
			</div>
		);
	}
}
