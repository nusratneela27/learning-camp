import { useQuery } from "@tanstack/react-query";

const useManageClass = () => {
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/class");
      return res.json();
    },
  });

  return [classes, loading, refetch];
};

export default useManageClass;
