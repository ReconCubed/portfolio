import { h } from 'preact';
import style from './style.css';

const Footer = () => (
	<footer className={style.footer}>
		<div>
			<small>Sam</small>
		</div>
		<div>
			<a href={'https://github.com/reconcubed'}><small>github</small></a> | <a href={'https://medium.com/reconaissance'}><small>medium</small></a>
		</div>
	</footer>
);

export default Footer;
