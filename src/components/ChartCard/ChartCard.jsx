import "./ChartCard.scss"
import LineChart from "../LineChart/LineChart";
import * as d3 from 'd3';

function ChartCard ({ data }) {
  // Parse and group data by type
  const parsedData = data.map(d => ({
    date: new Date(d.date),
    type: d.type,
    weight: d.weight
  }));

  const groupedData = d3.groups(parsedData, d => d.type);

  return (
    <>
      {groupedData.map(([type, values]) => (
        <LineChart key={type} type={type} data={values} />
      ))}
    </>
  );
};

export default ChartCard;