import button from "./button.module.scss";

type Props = {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

export default function Button({ type = "button", title, onClick }: Props) {
  return (
    <button onClick={onClick} type={type} className={button.botao}>
      {title}
    </button>
  );
}
