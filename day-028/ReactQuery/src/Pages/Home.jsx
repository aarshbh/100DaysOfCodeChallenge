import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const { isLoading, data } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });


if (isLoading) {
return <h1>Loading...</h1>
}

  return (
    <div>
      
      <h1>
        This is home page
        <br />
        <p> {data?.fact} </p>
      </h1>
    </div>
  );
};

export default Home;
