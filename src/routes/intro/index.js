import { h, Component } from 'preact';
import style from './style';
import Helmet from 'preact-helmet';

export default class Intro extends Component {
	render() {
		return (
			<div className={style.intro}>
				<Helmet
					style={[
						{type: "text/css", cssText: "body {background: rgb(255,40,40);" +
								"background: linear-gradient(165deg, rgba(255,40,40,1) 0%, rgba(255,150,77,1) 100%);}"}
					]}
				/>
				<div className={style.main}>
					<h1>SOFTWARE ENGINEER</h1>
					<h1>LIVING IN AUSTRALIA</h1>
					<h1>YEARS OF EXPERIENCE</h1>
					<h1>AVAILABLE FOR YOU</h1>
				</div>
			</div>
		)
	}
}
