import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import classes from './main-navigation.module.css';

function MainNavigation() {
	return (
		<header className={classes.header}>
			<Link href='/'>
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href='/posts'>Alle notities</Link>
					</li>
					<li>
						<Link href='/links'>Links</Link>
					</li>
					
					<li>
						<a
							href='https://github.com/Christian-Mar'
							target='_blank'
							rel='noopener noreferrer'
						>
							{' '}
							<span>GitHub </span>
							<FontAwesomeIcon
								icon={faGithub}
								className={classes.icon}
							></FontAwesomeIcon>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
