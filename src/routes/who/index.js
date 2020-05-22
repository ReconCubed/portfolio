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
					style={[
						{type: "text/css", cssText: "body {background: rgb(11,35,255);" +
								"background: linear-gradient(165deg, rgba(11,35,255,1) 0%, rgba(96,221,255,1) 100%);}"}
					]}
				/>
				<div className={style.content}>
					<img className={style.me} src={gif} alt={'sprite rendition of myself'}/>
					<div>
						<h1>i'm sam. nice to meet you.</h1>
						<p>i specialise in everything web & mobile.</p>
						<p>based in australia.</p>
					</div>
				</div>
			</div>
		)
	}
}
