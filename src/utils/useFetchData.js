import {useState, useEffect, useMemo} from "react";
import WasteApi from "./waste-api";

export const useFetchWasteInfo = () => {
  const wasteApi = useMemo(() => new WasteApi(), []);;
  const [wasteInfo, setWasteInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

 useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const fetchedData = await wasteApi.getAllWasteTypes();
                setWasteInfo(fetchedData);


                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [wasteApi]);

  return ({wasteInfo, loading, error});
}


export const useFetchWastelog = () => {
  const wasteApi = useMemo(() => new WasteApi(), []);;
  const [wasteLog, setWasteLog] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

 useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const fetchedData = await wasteApi.getAllWastelog();
                setWasteLog(fetchedData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [wasteApi]);

  return ({wasteLog, setWasteLog, loading, error});
}

