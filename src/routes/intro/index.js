import { h, Component } from 'preact';
import style from './style';

export default class Intro extends Component {
	render() {
		return (
			<div className={style.intro}>
				<h1>Intro</h1>
			</div>
		)
	}
}
