import style from './Header.module.css';
import todoLogo from '../assets/todo-logo.svg';

export function Header() {
  return (
      <div className={style.header}>
        <img src={todoLogo} alt="Todo Logo" />
      </div>
  );
}
