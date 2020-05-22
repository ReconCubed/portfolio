import {h, Component} from 'preact';
import style from './style';
import gif from './me.gif';
import Helmet from 'preact-helmet';

export default class Who extends Component {
	render() {
		return (
			<div className={style.who}>
				<Helmet
					title={"Who"}
				/>
				<div className={style.content}>
					<img className={style.me} src={gif}/>
					<div>
						<h1>i'm sam. nice to meet you.</h1>
						<p>i specialise in everything web & mobile.</p>
					</div>
				</div>
			</div>
		)
	}
}
