import { Trash } from "@phosphor-icons/react";
import { Check } from '@phosphor-icons/react/dist/ssr';
import { ITask } from '../../App';

import style from "./Task.module.css";

interface ITaskProp {
  task: ITask
  taskDelete: (id: number) => void,
  taskChecked: (task: ITask) => void
}

export function Task({ task, taskDelete, taskChecked}: ITaskProp) {

  function handleTaskDelete() {
    taskDelete(task.id);
  }

  function handleTaskChecked() {
    const newTask: ITask = {
      ...task,
      isChecked: !task.isChecked
    }

    taskChecked(newTask);
  }

  const taskIdAndFor = `taskCheckbox${task.id}`

  return (
    <div className={style.task}>
      <div className={style.checkboxAndText}>
        <input readOnly type="checkbox" id={taskIdAndFor} checked={task.isChecked} onClick={handleTaskChecked}/>
        <label htmlFor={taskIdAndFor}>
          <Check />
        </label>
        <p>
          {task.content}
        </p>
      </div>

      <button type="button" className={style.deleteButton} onClick={handleTaskDelete}>
        <Trash size={16} />
      </button>
    </div>
  );
}
