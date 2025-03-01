import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      await axios.get("/api/test");
    }

    getData();
  }, []);

  return (
    <div>
      <div>{data}</div>
      <div>Hello World!</div>
    </div>
  );
}
