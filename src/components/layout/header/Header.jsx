/* eslint-disable react/prop-types */
import styles from './Header.module.scss'
import { useAuth } from './../../../hooks/useAuth'
import { CgArrowLeft } from 'react-icons/cg'
import { HiUserCircle } from "react-icons/hi2";
import Hamburger from './../hamburger/Hamburger'
import { useLocation, useNavigate } from 'react-router-dom'
const Header = ({ backLink = '' }) => {
	// eslint-disable-next-line no-unused-vars
	const { isAuth } = useAuth()
	const location = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{location.pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<CgArrowLeft className={styles.buttonSvgLeft} color='white' />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<HiUserCircle  className={styles.buttonSvgLeft} color='white' />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
