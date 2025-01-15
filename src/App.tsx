import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ListHeader } from "./components/ListTask/ListHeader";
import { Task } from "./components/ListTask/Task";
import { EmptyList } from "./components/ListTask/EmptyList";

import { useState } from 'react';

import style from "./App.module.css";
import "./global.css";

export interface ITask {
  id: number;
  content: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTask] = useState<ITask[]>([]);

  function handleNewTask(content: string) {
    setTask((state) => {
      const newTask: ITask = {
        id: state.length + 1,
        content,
        isChecked: false
      }
      
      return [...state, newTask];
    });
  }

  function taskDelete(taskIdDelete: number) {
    const listWithoutTask = tasks.filter(task => task.id !== taskIdDelete);
    setTask(listWithoutTask);
  }

  function taskChecked(taskSelect: ITask) {
    const updateCheckedTasks = tasks.map((task) => {
      if (task.id === taskSelect.id) {
        return { ...task, isChecked: taskSelect.isChecked }
      }

      return { ...task }
    });

    setTask(updateCheckedTasks)
  }

  const isTaskListEmpty = tasks.length <= 0;

  return (
    <main>
      <Header />

      <section className={style.container}>
        <AddTask handleNewTask={handleNewTask}/>

        <div className={style.taskListContainer}>
          <ListHeader tasks={tasks}/>

          {isTaskListEmpty ? (
            <EmptyList />
          ) : (
            <div className={style.taskBox}>
              {tasks.map((task) => {
                return (
                  <Task 
                    key={task.id} 
                    task={task} 
                    taskDelete={taskDelete} 
                    taskChecked={taskChecked}
                  />
                )
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
