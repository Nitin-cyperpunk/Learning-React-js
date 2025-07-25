import React from "react";
import { useAppSelector } from "../redux/hook";

const MyComp: React.FC = () => {
  const count = useAppSelector((s) => s.counter);

  return <h1>MyCom: {count}</h1>;
};

export default MyComp;