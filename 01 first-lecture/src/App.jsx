import Navu from "./Navbar";
import { Fala } from "./Fala";
import { useState } from "react";

function Component() {
  return <h1>Hello</h1>;
}

function Comp() {
  return (
    <>
      <h1>Salman</h1>
      <h2>Khan</h2>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={increment}>Increment</button>
      {count}
      <h1 className="">Hello </h1>
      {2 + 2}
      <Comp2 />
      <Component />
      <Component />
      <Component />
      <Component />
      <Comp />
      <Navu title="falha" />
      <Navu title="Navbar1" link="google.com" Number={234567} />
      <Fala title="Fala1" link="google1.com" Number={1234567} />
    </>
  );
}

function Comp2() {
  return (
    <>
      <img src="../Screenshot 2025-10-21 211841.png" alt="" />
    </>
  );
}

export default App;