import apiRequests, { http } from "@/configs/axiosInstance";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";

// get datas
const useGetService = <T>(
  endPoint: string,
  key: string,
  enabled: boolean = true,
  options: UseQueryOptions<T> | undefined = undefined
) => {
    console.log(endPoint);
    
  return useQuery({
    queryFn: async () => (await apiRequests.get(endPoint)).data,
    queryKey: [key],
    staleTime: Infinity,
    enabled: enabled,
    ...options,
  });
};

export { useGetService };
