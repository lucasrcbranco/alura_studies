import IAssingment from "../../types/IAssingment";
import ListItem from "./Item";
import style from "./list.module.scss";

export default function List({ assingments }: { assingments: IAssingment[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia!</h2>
      <ul>
        {assingments.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
