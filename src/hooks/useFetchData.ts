import { useQuery } from "react-query";

interface petService {
  id: number;
  name: string;
  description: string;
  price: string;
}
export interface product {
  id: number;
  name: string;
  price: string;
}

export interface products {
  name: string;
  Products: product[];
}

export interface Data {
  PetServices: petService[];
  AllProducts: products[];
}

const fetchData = async (): Promise<Data> => {
  const res = await fetch("data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await res.json();
  return data;
};

export const useFetchData = () => {
  const { data, isError, isLoading } = useQuery<Data>("fetchData", fetchData);

  return { data, isError, isLoading };
};
