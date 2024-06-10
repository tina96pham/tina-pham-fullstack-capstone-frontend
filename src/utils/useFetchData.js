import { useState, useEffect, useMemo, useCallback } from "react";
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

  return { wasteData, loading, error };
};

// Get Product Info
export const useSearchProducts = () => {
  const wasteApi = useMemo(() => new WasteApi(), []); 

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]); 
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const fetchedData = await wasteApi.searchProducts(searchTerm);
      setSearchResults(fetchedData);
    } catch (error) {
      setError(`Unable to search for "${searchTerm}": ${error.message}`);
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, wasteApi]); 

  useEffect(() => {
    fetchData();
  }, [fetchData]); 

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    isLoading,
    error,
  };
};
export function useFetchRecords() {
  const wasteApi = useMemo(() => new WasteApi(), []); 
  const [recordData, setRecordData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const fetchedData = await wasteApi.getAllRecords();
      return fetchedData;
    } catch (error) {
      setError(error);
      console.error('Error fetching data: ', error);
      throw error; 
    }
  }, [wasteApi]); 

  useEffect(() => {
    const fetchAsync = async () => {
      setLoading(true); 
      try {
        const data = await fetchData(); 
        setRecordData(data);
        console.log(`Fetched waste data: `, data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchAsync();
  }, [fetchData]); 
  useEffect(() => {
      console.log('recordData updated: ', recordData); 
    }, [recordData]);

  return { recordData, loading, error };
  }
