import { h, Component } from 'preact';
import style from './style';
import Helmet from 'preact-helmet';

export default class What extends Component {
	render() {
		return (
			<div className={style.what}>
				<Helmet
					title={"What"}
					style={[
						{type: "text/css", cssText: "body {background: rgb(144,44,255);" +
								"background: linear-gradient(165deg, rgba(144,44,255,1) 0%, rgba(248,129,255,1) 100%);}"}
					]}
				/>
				<h1>What</h1>
			</div>
		)
	}
}
