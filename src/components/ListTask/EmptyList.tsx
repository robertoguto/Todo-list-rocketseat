import { ClipboardText } from '@phosphor-icons/react';
import style from './EmptyList.module.css';

export function EmptyList() {
  return (
    <div className={style.emptyContainer}>
      <ClipboardText />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  );
}
