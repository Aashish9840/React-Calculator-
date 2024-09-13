import Input from "./components/Input";
import Numbers from "./components/Numbers";
import { useState } from "react";
import "./components/React.css";
function App() {
  const [output, setoutput] = useState("");

  const numbers = [
    "7",
    "8",
    "9",
    "+",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "*",
    "C",
    0,
    "=",
    "/",
  ];
  const [isResult, setResult] = useState(false);
  const handlenumber = (button) => {
    if (button === "C") {
      setoutput("");
      setResult(false);
    } else if (button === "=") {
      try {
        setoutput(eval(output));
        setResult(true);
      } catch (error) {
        setoutput("Error");
        setResult(true);
      }
    } else if (button === "D") {
      const ind = output.length - 1;
      setoutput(output.slice(0, ind));
    } else {
      if (isResult) {
        if (
          button === "*" ||
          button === "+" ||
          button === "-" ||
          button === "/"
        ) {
          setoutput(output + button);
          setResult(false);
        } else {
          setoutput(button);
          setResult(false);
        }
      } else {
        setoutput(output + button);
        setResult(false);
      }
    }
  };
  return (
    <div className="main-container">
      <div className="calculator">
        <Input display={output} />
        <div className="grid">
          {numbers.map((number, index) => {
            return (
              <Numbers num={number} key={index} handlenumber={handlenumber} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
