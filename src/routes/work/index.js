import { h, Component } from 'preact';
import style from './style';
import Helmet from 'preact-helmet';

export default class Work extends Component {
	render() {
		return (
			<div className={style.work}>
				<Helmet
				title={"Work"}
				style={[
					{type: "text/css", cssText: "body {background: rgb(255,112,81);" +
							"background: linear-gradient(165deg, rgba(255,112,81,1) 0%, rgba(244,122,93,1) 100%);}"}
				]}
				/>
				<h1>Work</h1>
			</div>
		)
	}
}
