import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import IAssingment from "../types/IAssingment";
import style from "./app.module.scss";

function App() {
  const [assignments, setAssignments] = useState<IAssingment[]>([]);
  const [selectedItem, setSelectedItem] = useState<IAssingment>();

  function getSelectedAssignment(selectedAssignment: IAssingment) {
    setSelectedItem(selectedAssignment);
    setAssignments((items) =>
      items.map((item) => ({
        ...item,
        selected: item.id === selectedAssignment.id ? true : false,
      }))
    );
  }

  function finishAssignment() {
    if (selectedItem) {
      setSelectedItem(undefined)
      setAssignments((assignments) =>
        assignments.map((assignment) => {
          if (assignment.id === selectedItem.id) {
            return {
              ...assignment,
              selected: false,
              completed: true,
            };
          }
          return assignment;
        })
      );
    }
  }

  return (
    <div className={style.appStyle}>
      <Form setAssignments={setAssignments} />
      <List
        assignments={assignments}
        getSelectedAssignment={getSelectedAssignment}
      />
      <Timer selectedItem={selectedItem} finishAssignment={finishAssignment} />
    </div>
  );
}

export default App;
