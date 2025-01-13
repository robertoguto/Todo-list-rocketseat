import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ListHeader } from './components/ListTask/ListHeader';
import { List } from './components/ListTask/List';
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

          {false ? (
            <List />
          ) : (
            <EmptyList />
          )}
        </div>
      </section>
    </main>
  );
}
