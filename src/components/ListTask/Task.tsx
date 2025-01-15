import { Trash } from "@phosphor-icons/react";
import style from "./Task.module.css";
import { Check } from '@phosphor-icons/react/dist/ssr';

export function Task() {
  return (
    <div className={style.task}>
      <div className={style.checkboxAndText}>
        <input readOnly type="checkbox" id="taskCheckbox" />
        <label htmlFor="taskCheckbox">
          <Check />
        </label>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
      </div>

      <button type="button" className={style.deleteButton}>
        <Trash size={16} />
      </button>
    </div>
  );
}
