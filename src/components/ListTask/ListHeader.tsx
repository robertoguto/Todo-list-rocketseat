import { ITask } from "../../App";
import style from "./ListHeader.module.css";

export function ListHeader({ tasks }: { tasks: ITask[] }) {

  const checkedTasksCounter = tasks.reduce((accumulator, currentTask) => {
    if (currentTask.isChecked) {
      return accumulator + 1;
    }

    return accumulator;
  }, 0)

  return (
    <header className={style.listHeader}>
      <div className={style.labelAndCounter}>
        <strong>Tarefas criadas</strong>
        <div className={style.counter}>
          <strong>{tasks.length}</strong>
        </div>
      </div>
      <div className={style.labelAndCounter}>
        <strong>Concluídas</strong>
        <div className={style.counter}>
          <strong>
            {checkedTasksCounter} de {tasks.length}
          </strong>
        </div>
      </div>
    </header>
  );
}
