import toDoListLogotipo from '../../assets/to-do-list-logotipo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.img} src={toDoListLogotipo} alt='Logotipo ToDo List' />
    </header>
  )
}
