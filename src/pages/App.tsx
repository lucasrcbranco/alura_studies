import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import IAssingment from "../types/IAssingment";
import style from "./app.module.scss";



function App() {
  const [assingments, setAssignments] = useState<IAssingment[]>([]);

  return (
    <div className={style.appStyle}>
      <Form setAssignments={setAssignments} />
      <List assingments={assingments} />
      <Timer />
    </div>
  );
}

export default App;
