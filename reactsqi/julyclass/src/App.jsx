import "./App.css";
import { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
// import Card from "./component/Card";
import Card from "./component/Card";
import Signup from "./page/signup";
import Button from "./component/Button";
import Alltodo from "./component/Alltodo";
import Displaytodo from "./component/Displaytodo";

function App() {
  const [alltodo, setAlltodo] = useState([]);
  const sayhello = () => {
    alert("say hello");
  };
  const saywelcome = () => {
    alert("Welcome");
  };

  const addtodo = (newTodo) => {
    setAlltodo([...alltodo, newTodo]);
  };
  return (
    <>
      <Alltodo addtodo={addtodo} />
      <Displaytodo displaytodo={alltodo} />
      <Button sayhello={sayhello} name="edit" style="btn btn-primary" />
      <Button name="delete" sayhello={saywelcome} style="btn btn-danger" />
      {/* <Button name="edit" style="okay" /> */}
      {/* <Button />
      <Button /> */}
      {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <Footer /> */}
      {/* <Card /> */}
      {/* <Signup /> */}
    </>
  );
}

export default App;
