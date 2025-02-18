/* eslint-disable react/prop-types */
import styles from './Hamburger.module.scss'
import cn from 'clsx'
import { menu } from './menu.data'

const Menu = ({ isShow }) => {
	const logoutHandle = () => {}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, index) => {
					return (
						<li key={index}>
							{item.title}
							{/* <Link to={item.link}>{item.title}</Link> */}
						</li>
					)
				})}
				<li>
					<button onClick={logoutHandle}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
