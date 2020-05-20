import { h, Component } from 'preact';
import style from './style';

export default class Intro extends Component {
	render() {
		return (
			<div className={style.intro}>
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
