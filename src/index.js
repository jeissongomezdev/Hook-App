import React from "react";
import { createRoot } from "react-dom/client";
import { CounterApp } from "./components/01-useState/CounterApp";
// import { HookApp } from "./HookApp";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<CounterApp />);
