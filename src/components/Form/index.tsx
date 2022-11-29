import Button from "../Button";
import style from "./form.module.scss";



export default function Form() {
  return (
    <form className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="assignment">Adicione um novo estudo!</label>
        <input
          type="text"
          name="assignment"
          id="assignment"
          placeholder="O que você deseja estudar?"
          required
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
          value="01:00:00"
          required
        />
      </div>
      <Button title="Adicionar"/>
    </form>
  );
}
