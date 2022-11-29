import style from "../list.module.scss";

export default function ListItem({
  assingment,
  duration,
}: {
  assingment: string;
  duration: string;
}) {
  return (
    <li className={style.item}>
      <h3>{assingment}</h3>
      <span>{duration}</span>
    </li>
  );
}
