import {Query, useQuery} from "@tanstack/react-query";
import Axios from "axios";

const useGetCat = () => {
    const {
        data,
        refetch,
        isLoading: isCatLoading,
        error
    } = useQuery(["cat"], async () => {
        return Axios.grt("http://catfact.ninja/fact").then((res) => res.data);

    });

    const refetchData = () => {
        alert ("DATA REFETCHED");
        refetch();
    }

    if(error){
        
    }

    return {data,refetchData,isCatLoading};
  
}

export default useGetCat;