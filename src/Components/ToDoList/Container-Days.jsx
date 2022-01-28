import React from "react";
import { Container } from "./Container";

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
    <div>
      {daysList.map((item) => (
        <Container name={item.name} />
      ))}
    </div>
  );
}
