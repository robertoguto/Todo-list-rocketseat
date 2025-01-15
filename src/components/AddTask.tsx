import { PlusCircle } from "@phosphor-icons/react";

import style from './AddTask.module.css';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

interface IAddTaskProp {
  handleNewTask: (content: string) => void,
}

export function AddTask({handleNewTask}: IAddTaskProp) {
  const [contentTask, setContentTask] = useState('');

  function handleNewContentTaskChange(event: ChangeEvent<HTMLInputElement>): void {
    setContentTask(event.target.value);
  }

  function handleNewTaskClick(): void {
    handleNewTask(contentTask);
    setContentTask('');
  }

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      handleNewTaskClick();
    }
  }

  const isContentTaskEmpty = !contentTask.trim();

  return ( 
    <div className={style.boxInputTaskAndCreate}>
      <input 
        type="text" 
        placeholder='Adicionar uma nova tarefa'
        value={contentTask} 
        onChange={handleNewContentTaskChange}
        onKeyUp={handleKeyPress}
      />
      <button type='button' onClick={handleNewTaskClick} disabled={isContentTaskEmpty}>
        <strong>Criar</strong>
        <PlusCircle />
      </button>
    </div>
  );
}
