import IAssignment from "../../types/IAssingment";
import ListItem from "./Item";
import style from "./list.module.scss";

interface Props {
  assignments: IAssignment[];
  getSelectedAssignment: (selectedAssignment: IAssignment) => void;
}

export default function List({ assignments, getSelectedAssignment }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia!</h2>
      <ul>
        {assignments.map((item) => (
          <ListItem
            getSelectedAssignment={getSelectedAssignment}
            item={item}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}
