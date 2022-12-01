import IAssignment from "../../../types/IAssingment";
import style from "../list.module.scss";

interface Props {
  item: IAssignment;
  getSelectedAssignment: (selectedAssignment: IAssignment) => void;
}

export default function ListItem({ item, getSelectedAssignment }: Props) {
  return (
    <li
      className={`${style.item} ${item.selected ? style.itemSelecionado : null}`}
      onClick={() => {
        getSelectedAssignment({
          id: item.id,
          assignment: item.assignment,
          duration: item.duration,
          completed: item.completed,
          selected: true,
        });
      }}
    >
      <h3>{item.assignment}</h3>
      <span>{item.duration}</span>
    </li>
  );
}
