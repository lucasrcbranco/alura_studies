import { useState } from "react";
import IAssingment from "../../types/IAssingment";
import Button from "../Button";
import style from "./form.module.scss";
import {v4}from 'uuid';

interface Props {
  setAssignments: React.Dispatch<React.SetStateAction<IAssingment[]>>;
}

export default function Form({ setAssignments }: Props) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("00:00:00");

  function AdicionarTarefa(event: React.FormEvent) {
    event.preventDefault();
    setAssignments((assingments) => [
      ...assingments,
      {
        id: v4(),
        assingment: title,
        duration: time,
        completed: false,
        selected: false,
      },
    ]);

    setTitle("");
    setTime("00:00:00");
  }

  return (
    <form
      className={style.novaTarefa}
      onSubmit={(event) => {
        AdicionarTarefa(event);
      }}
    >
      <div className={style.inputContainer}>
        <label htmlFor="assignment">Adicione um novo estudo!</label>
        <input
          type="text"
          name="assignment"
          id="assignment"
          placeholder="O que você deseja estudar?"
          required
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="duration">Tempo</label>
        <input
          type="time"
          name="duration"
          id="duration"
          step="1"
          min="00:00:00"
          max="01:30:00"
          onChange={(event) => {
            setTime(event.target.value);
          }}
          value={time}
          required
        />
      </div>
      <Button type="submit" title="Adicionar" />
    </form>
  );
}
