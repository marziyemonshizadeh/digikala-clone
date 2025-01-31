import { http } from "@/configs/axiosInstance";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

// get datas
const useGetService = <T>(
  endPoint: string,
  key: string,
  enabled: boolean = true,
  options: UseQueryOptions<T> | undefined = undefined
) => {
  return useQuery({
    queryFn: async () => (await http.get(endPoint)).data,
    queryKey: [key],
    staleTime: Infinity,
    enabled: enabled,
    ...options,
  });
};

export { useGetService };
