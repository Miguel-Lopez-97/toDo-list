import React from "react";
import { Container } from "./Container";
import '../../index.css'
export function Days() {
  const daysList = [
    { name: "Monday" },
    { name: "Tuesday" },
    { name: "Wednesday" },
    { name: "Thursday" },
    { name: "Friday" },
    { name: "Saturday" },
    { name: "Sunday" },
  ];

  return (
    <div className="App">
      {daysList.map((item) => (
        <Container name={item.name} key={item.name}/>
      ))}
    </div>
  );
}
