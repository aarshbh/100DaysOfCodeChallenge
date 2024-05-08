import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const res = await Axios.get("https://catfact.ninja/fact");
      return res.data;
    },
  });
    

if (isLoading) {
return <h1>Loading...</h1>
}

  return (
    <div>
      
      <h1>
        This is home page
        <br />
        <blockquote> {data?.fact} </blockquote>
      </h1>
    </div>
  );
};

export default Home;
