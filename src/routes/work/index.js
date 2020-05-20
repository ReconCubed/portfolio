import { h, Component } from 'preact';
import style from './style';
import Helmet from 'preact-helmet';

export default class Work extends Component {
	render() {
		return (
			<div className={style.work}>
				<Helmet
				title={"Work"}
				/>
				<h1>Work</h1>
			</div>
		)
	}
}
