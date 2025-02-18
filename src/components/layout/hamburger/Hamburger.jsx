import styles from './Hamburger.module.scss'
import { useState } from 'react'
import { CgMenuRound } from 'react-icons/cg'
import { CgClose } from 'react-icons/cg'
import Menu from './Menu'
const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <CgMenuRound color='white' /> : <CgClose color='white' />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
