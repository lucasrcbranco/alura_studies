import button from "./button.module.scss";

type Props = {
  title: string;
};

export default function Button({ title }: Props) {
  return <button className={button.botao}>{title}</button>;
}
