import { useState } from "react";
import "./App.css";
import { Content } from "./components/functionComponents/Content";
import { Counter } from "./components/functionComponents/Counter";
import Login from "./components/functionComponents/Login";

import { OurNav } from "./components/functionComponents/OurNav";

function App() {
  let [childData, setChildData] = useState("");
  let ongettingInputValue = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <OurNav />
      <Login title="hello" myFun={ongettingInputValue} />
      <h1>
        Data From Child is :{" "}
        <strong className="text-danger"> {childData} </strong>{" "}
      </h1>
      {/* <Counter /> */}
      {/* <Content bgColor="bg-success" title="Open source" intakeNumber="3" /> */}
    </div>
  );
}

export default App;

/** jsx --> Javascript XML --> syntax suger*/
/** components
 * -----------------
 *  1 - class component
 *  2- function component
 */
