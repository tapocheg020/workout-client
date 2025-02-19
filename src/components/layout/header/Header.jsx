import styles from './Header.module.scss'
import { useAuth } from './../../../hooks/useAuth'
import { CgArrowLeft } from 'react-icons/cg'
import Hamburger from './../hamburger/Hamburger'

const Header = () => {
	// eslint-disable-next-line no-unused-vars
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<CgArrowLeft className={styles.buttonSvgLeft} color='white' />
			</button>
			{/* User Profile */}
			<Hamburger />
		</header>
	)
}

export default Header
