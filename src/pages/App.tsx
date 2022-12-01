import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import IAssingment from "../types/IAssingment";
import style from "./app.module.scss";

function App() {
  const [assignments, setAssignments] = useState<IAssingment[]>([]);
  const [selected, setSelected] = useState<IAssingment>();

  function getSelectedAssignment(selectedAssignment: IAssingment) {
    setSelected(selectedAssignment);
    setAssignments((items) =>
      items.map((item) => ({
        ...item,
        selected: item.id === selectedAssignment.id ? true : false,
      }))
    );
  }
  return (
    <div className={style.appStyle}>
      <Form setAssignments={setAssignments} />
      <List
        assignments={assignments}
        getSelectedAssignment={getSelectedAssignment}
      />
      <Timer />
    </div>
  );
}

export default App;
