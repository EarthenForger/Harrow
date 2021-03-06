import React from 'react';
import NavButton from "./NavButton";
import styles from './navbar.module.css'
import navButtons from "../../config/buttons";
import { Link } from "react-router-dom";

const NavBarButtons = props => (
	<div>
	  {props.navButtons.map(button => (
		<NavButton
		key={button.path}
		path={button.path}
		label={button.label}
		icon={button.icon}
		/>
	  ))}
	</div>
);

const Navbar =() => (
	<header className={styles.header}>
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<Link to="/">
					<img className={styles.logo} src="/images/pathfinder.png" alt="Pathfinder Roleplaying system logo."></img>
				</Link>
			</div>
			<NavBarButtons navButtons={navButtons}></NavBarButtons>
		</nav>
	</header>
)
export default Navbar;