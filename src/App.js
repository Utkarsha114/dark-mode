import "./styles.css";
import React, { useState } from "react";
import { Toggle } from "./components/toggle";
import useLocalStorage from "use-local-storage";

export default function App() {
  const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preferences);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <h1 className="title">Hello CodeSandbox!</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  );
}
