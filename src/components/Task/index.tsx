import trashImg from '../../assets/trash.svg'

import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <input type="checkbox" id="checkbox" name="task" />
      <label htmlFor="checkbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
      <div className={styles.image}></div>
    </div>
  )
}
