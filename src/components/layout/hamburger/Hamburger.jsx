import styles from './Hamburger.module.scss'
import { CgMenuRound } from 'react-icons/cg'
import { CgClose } from 'react-icons/cg'
import Menu from './Menu'
import { useOnClickOutside } from './../../../hooks/useOnClickOutside'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <CgClose /> : <CgMenuRound />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
