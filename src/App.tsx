import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ListHeader } from './components/ListTask/ListHeader';
import { Task } from './components/ListTask/Task';
import { EmptyList } from './components/ListTask/EmptyList';

import style from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <main>
      <Header />

      <section className={style.container}>
        <AddTask />

        <div className={style.taskListContainer}>
          <ListHeader />

          {true ? (
            <div className={style.taskBox}>
              <Task />
              <Task />
              <Task />
              <Task />
            </div>
          ) : (
            <EmptyList />
          )}
        </div>
      </section>
    </main>
  );
}
