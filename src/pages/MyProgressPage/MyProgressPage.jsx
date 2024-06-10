import "./MyProgressPage.scss";
import StackBarChart from "../../components/StackBarChart/StackBarChart";
import { useFetchRecords } from "../../utils/useFetchData";
import Loading from "../../components/Loading/Loading";
import ChartCard from "../../components/ChartCard/ChartCard";
import { useState, useEffect } from "react";

function MyProgressPage() {
  const { recordData, loading } = useFetchRecords();
  const [selectedYear, setSelectedYear]= useState(null)
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!loading && recordData) {
      // Filter data based on selected year
      const filtered = selectedYear ? recordData.filter(d => new Date(d.date).getFullYear() === selectedYear) : recordData;
      setFilteredData(filtered);
    }
  }, [recordData, selectedYear, loading]);
  if (loading || !recordData || recordData.length === 0 || filteredData.length === 0) {
    return null; // Render nothing if loading, no data available, or no filtered data
  }


  return (
    <div className="my-progress-page">
      {loading ? (
        <Loading />
      ) : (
        <>
        <StackBarChart data={recordData} />

        <div className="App">
          <h1>Product Weight Consumption Over Year</h1>
          <label htmlFor="yearSelect">Select Year:</label>
            <select id="yearSelect" onChange={e => setSelectedYear(parseInt(e.target.value))}>
              <option value="">All</option>
              {Array.from(new Set(recordData.map(d => new Date(d.date).getFullYear()))).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          <div className="cards-container">
            {filteredData.length > 0 && <ChartCard data={filteredData} />}
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default MyProgressPage;

/*
import "./MyProgressPage.scss";
import StackBarChart from "../../components/StackBarChart/StackBarChart";
import { useFetchRecords } from "../../utils/useFetchData";


function MyProgressPage (){
 const { recordData, loading, error } = useFetchRecords();

  return (
    <div className="my-progress-page">
      <StackBarChart/>
    </div>
  )
}

export default MyProgressPage;
*/