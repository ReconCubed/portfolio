import { h, Component } from 'preact';
import style from './style';
import Helmet from 'preact-helmet';

export default class What extends Component {
	render() {
		return (
			<div className={style.what}>
				<Helmet
					title={"What"}
				/>
				<h1>What</h1>
			</div>
		)
	}
}
