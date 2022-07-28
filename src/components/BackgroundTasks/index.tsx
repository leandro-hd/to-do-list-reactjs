import clipboardImg from '../../assets/clipboard.svg'
import { Counter } from '../Counter'
import { Task } from '../Task'

import styles from './BackgroundTasks.module.css'

export function BackgroundTasks() {
  return (
    <div className={styles.backgroundTasks}>
      <header>
        <span className={styles.createdTasks}>
          Tarefas criadas
          <Counter />
        </span>

        <span className={styles.completedTasks}>
          Concluídas
          <Counter />
        </span>
      </header>

      {/* <div className={styles.boxTasks}>
        <img className={styles.boxTaskImage} src={clipboardImg} alt="Clipboard" />

        <strong>Você ainda não tem tarefas cadastradas</strong>

        <span>Crie tarefas e organize seus itens a fazer</span>
      </div> */}

      <div className={styles.taskList}>
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}
