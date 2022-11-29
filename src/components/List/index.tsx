import ListItem from "./Item";
import style from "./list.module.scss";

export default function List() {
  const tarefas = [
    {
      assingment: "tarefa 1",
      duration: "01:00:00",
    },
    {
      assingment: "tarefa 2",
      duration: "02:00:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia!</h2>
      <ul>
        {tarefas.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
