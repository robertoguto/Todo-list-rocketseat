import style from './Header.module.css';
import todoLogo from '../assets/todo-logo.svg';

export function Header() {
  return (
      <header className={style.mainHeader}>
        <img src={todoLogo} alt="Todo Logo" />
      </header>
  );
}
