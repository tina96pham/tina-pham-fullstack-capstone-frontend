import "./MyProgressPage.scss";
import { useFetchRecords } from "../../utils/useFetchData";
import Loading from "../../components/Loading/Loading";
import ChartCard from "../../components/ChartCard/ChartCard";
import { useState, useMemo } from "react";

function MyProgressPage() {
  const { recordData, loading } = useFetchRecords();
  const [selectedYear, setSelectedYear] = useState(null);
  const filteredData = useMemo(() => {
    if (loading || !recordData) return [];
    return selectedYear
      ? recordData.filter(
          (record) => new Date(record.date).getFullYear() === selectedYear
        )
      : recordData;
  }, [recordData, selectedYear, loading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="progress-page">
            <h2 className="progress-page__header">
              Consumption Over Year
            </h2>
            <label className="progress-page__label" htmlFor="yearSelect">
              <p className="progress-page__subheader">Select Year:</p>
           
            <select
              className="progress-page__selected-year"
              id="yearSelect"
              onChange={({ target: { value } }) =>
                setSelectedYear(value ? parseInt(value) : null)
              }
            >
              <option value="">All</option>
              {recordData
                .map(({ date }) => new Date(date).getFullYear())
                .filter((year, index, self) => self.indexOf(year) === index)
                .sort((a, b) => b - a)
                .map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
            </select>
            </label>
            <div className="progress-page__card-container">
              {filteredData.length > 0 && <ChartCard  data={filteredData} />}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MyProgressPage;
