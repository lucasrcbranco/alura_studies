import IAssignment from "../../types/IAssingment";
import Button from "../Button";
import Clock from "./Clock";
import style from "./timer.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { useEffect, useState } from "react";

interface Props {
  selectedItem: IAssignment | undefined;
  finishAssignment: () => void;
}

export default function Timer({ selectedItem, finishAssignment }: Props) {
  const [time, setTime] = useState<number>(
    timeToSeconds(String(selectedItem?.duration))
  );

  useEffect(() => {
    if (selectedItem?.duration) {
      setTime(timeToSeconds(selectedItem.duration));
    }
  }, [selectedItem]);

  function countdown(time: number = 0) {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
        countdown(time - 1);
      }
      else
      {
        finishAssignment();
      }
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha uma tarefa e inicie o cronômetro.</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button
        title="Iniciar!"
        onClick={() => {
          countdown(time);
        }}
      />
    </div>
  );
}
