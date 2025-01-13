import { PlusCircle } from "@phosphor-icons/react";

import style from './AddTask.module.css';

export function AddTask() {
  return ( 
    <div className={style.boxInputTaskAndCreate}>
      <input type="text" placeholder='Adicionar uma nova tarefa' />
      <button type='button'>
        <strong>Criar</strong>
        <PlusCircle />
      </button>
    </div>
  );
}
