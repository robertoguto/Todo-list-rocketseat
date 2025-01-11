import { Header } from './components/Header';

import style from './App.module.css';
import './global.css';
import { AddTask } from './components/AddTask';

export function App() {
  return (
    <div>
      <Header />

      <div className={style.container}>
          <AddTask />
      </div>
    </div>
  )
}
