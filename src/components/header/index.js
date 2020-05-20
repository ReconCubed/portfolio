import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Sam</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Intro</Link>
			<Link activeClassName={style.active} href="/profile">Who</Link>
			<Link activeClassName={style.active} href="/profile/john">What</Link>
			<Link activeClassName={style.active} href="/profile/work">Work</Link>
		</nav>
		<div id={'contact'}>
			<Link activeClassName={style.active} href="/profile/contact">Contact</Link>
		</div>
	</header>
);

export default Header;
