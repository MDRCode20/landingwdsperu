import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className="text-red-950 bg-amber-200">HOLA MUNDO</p>
      <div className="flex flex-col items-center justify-center bg-slate-200 shadow-2xl p-5 rounded-2xl">
        <p className="text-xl text-red-500 font-bold">La quiero mucho mi princesa</p>
        <p>♥️♥️♥️♥️</p>
      </div>
    </div>
  );
}

export default App;
