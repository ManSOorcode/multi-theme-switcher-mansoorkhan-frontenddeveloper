import { useQueries, useQuery } from "@tanstack/react-query";

const useGetProducts = (key: string, api: string) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  });
};
const useGetCategory = (key: string, api: string) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      try {
        const categoriesResponse = await fetch(api);
        if (!categoriesResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const categoriesData = await categoriesResponse.json();
        const categoryList = categoriesData.map((cat: string) => ({
          name: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/'/g, ""),
          slug: cat,
        }));

        console.log("Categories:", categoryList);
        return categoryList;
      } catch (error) {
        console.error("Error fetching categories:", error);
        // throw error;
      }
    },
  });
};

export { useGetProducts, useGetCategory };
