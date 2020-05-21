import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>sandscri.pt</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Intro</Link>
			<Link activeClassName={style.active} href="/who">Who</Link>
			<Link activeClassName={style.active} href="/what">What</Link>
			<Link activeClassName={style.active} href="/work">Work</Link>
		</nav>
		<div class={style.contact}>
			<Link activeClassName={style.active} href="/">Contact</Link>
		</div>
	</header>
);

export default Header;
