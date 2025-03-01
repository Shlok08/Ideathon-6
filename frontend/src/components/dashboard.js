import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      await axios
        .get(process.env.REACT_APP_API_URL + "/api/test")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("ERROR => ", error);
        });
    }

    getData();
  }, []);

  return (
    <div>
      <div>{data?.status}</div>
      <div>Hello World!</div>
    </div>
  );
}
