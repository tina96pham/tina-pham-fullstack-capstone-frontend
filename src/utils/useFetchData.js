import {useState, useEffect, useMemo, useCallback} from "react";
import WasteApi from "./waste-api";
// export const useFetchInfo = () => {
//   const wasteApi = useMemo(() => new WasteApi(), []);
//   const [wasteInfo, setWasteInfo] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);


//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const fetchedData = await wasteApi.getAllWasteTypes();
//         setWasteInfo(fetchedData);
//         console.log(wasteInfo);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, [wasteApi]);

//   return { wasteInfo, loading, error};
// };
export function useFetchWasteInfo() {
  const wasteApi = useMemo(() => new WasteApi(), []); 
  const [wasteData, setWasteData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const fetchedData = await wasteApi.getAllWasteTypes();
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
        setWasteData(data);
        console.log(`Fetched waste data: `, data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchAsync();
  }, [fetchData]); 

  return { wasteData, loading, error };
}

/*
export function useFetchWasteInfo() {
  const wasteApi =  useMemo(() => new WasteApi(), []); 
  const [wasteData, setWasteData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const fetchedData = await wasteApi.getAllWasteTypes();
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

        setWasteData(data);
        console.log(`waste Date ${wasteData}`);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchAsync();
  }, [fetchData, wasteData]); 

  return { wasteData, loading, error };
}
*/