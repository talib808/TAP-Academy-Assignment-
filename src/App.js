import React from "react";
import PasswordGenerator from "./PasswordGenerator";
import GeneratedPassword from "./GeneratedPassword";
import PreviousPasswords from "./PreviousPasswords";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PasswordGenerator />
      <GeneratedPassword password="GeneratedPassword123!" />
      <PreviousPasswords />
    </div>
  );
}

export default App;
