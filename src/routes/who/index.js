import { h, Component } from 'preact';
import style from './style';

export default class Who extends Component {
	render() {
		return (
			<div className={style.who}>
				<h1>Who</h1>
			</div>
		)
	}
}
