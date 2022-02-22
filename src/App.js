import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <SignupForm />
      <hr />
      <Message isInfo isOutlined title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
}

export default App;
