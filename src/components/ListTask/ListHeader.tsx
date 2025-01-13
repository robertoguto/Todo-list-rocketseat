import style from "./ListHeader.module.css";

export function ListHeader() {
  return (
    <header className={style.listHeader}>
      <div className={style.labelAndCounter}>
        <strong>Tarefas criadas</strong>
        <div className={style.counter}>
          <strong>5</strong>
        </div>
      </div>
      <div className={style.labelAndCounter}>
        <strong>Concluídas</strong>
        <div className={style.counter}>
          <strong>2 de 5</strong>
        </div>
      </div>
    </header>
  );
}
