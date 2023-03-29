import "./App.css";
import { Content } from "./components/functionComponents/Content";
import { Counter } from "./components/functionComponents/Counter";

import { OurNav } from "./components/functionComponents/OurNav";

function App() {
  return (
    <div>
      <OurNav />
      <Counter />
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
