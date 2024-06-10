import {useState, useEffect, useMemo} from "react";
import WasteApi from "./waste-api";

// Get Waste Type Data
export const useFetchWasteInfo = () => {
  const wasteApi = useMemo(() => new WasteApi(), []);
  const [wasteData, setWasteData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedData = await wasteApi.getAllWasteTypes();
        setWasteData(fetchedData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [wasteApi]);

  return { wasteData, loading, error};
};

// Get Product Info
export const useSearchProducts = () => {
  const wasteApi = useMemo(() => new WasteApi(), []);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedData = await wasteApi.searchProducts(search);
        setProductData(fetchedData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [wasteApi, search]);

  return { productData, loading, error, setSearch, search};
};

