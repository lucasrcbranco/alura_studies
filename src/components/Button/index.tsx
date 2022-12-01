import button from "./button.module.scss";

type Props = {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
};

export default function Button({ type = "button", title }: Props) {
  return <button type={type} className={button.botao}>{title}</button>;
}
