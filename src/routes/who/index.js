import { h, Component } from 'preact';
import style from './style';
import Helmet from 'preact-helmet';

export default class Who extends Component {
	render() {
		return (
			<div className={style.who}>
				<Helmet
				title={"Who"}
				/>
				<h1>Who</h1>
			</div>
		)
	}
}
