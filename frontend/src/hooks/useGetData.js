import { useQuery } from "@tanstack/react-query";

const useGetData = (url, fn = ()=>{}) => {
    const {data, isError, isLoading, refetch} = useQuery({
        queryKey: [url],
        queryFn: async () => {
            const res = await fetch(url);
            const resData = await res.json();
            fn(resData);
            return resData;
        }
    })

    return {data, isError, isLoading, refetch};
}

export default useGetData;