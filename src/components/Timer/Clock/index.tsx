import style from "./clock.module.scss";

interface Props {
  time: number;
}

export default function Clock({ time = 0 }: Props) {
  if(isNaN(time))
  {
    time = 0
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [leftMinute, rightMinute] = String(minutes).padStart(2, "0");
  const [leftSecond, rightSecond] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{leftMinute}</span>
      <span className={style.relogioNumero}>{rightMinute}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{leftSecond}</span>
      <span className={style.relogioNumero}>{rightSecond}</span>
    </>
  );
}
