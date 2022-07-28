import { BackgroundTasks } from '../BackgroundTasks'
import { NewTask } from '../NewTask'

export function Dashboard() {
  return (
    <div>
      <NewTask />

      <BackgroundTasks />
    </div>
  )
}
