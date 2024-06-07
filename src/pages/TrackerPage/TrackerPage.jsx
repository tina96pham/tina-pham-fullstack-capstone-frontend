import "./TrackerPage.scss";
import StackBarChart from "../../components/StackBarChart/StackBarChart";
import  { useFetchWastelog } from "../../utils/useFetchData";
import WasteApi from "../../utils/waste-api.js"

function TrackerPage () {

  const { wasteLog } = useFetchWastelog();
  console.log(`This is waste log data ${wasteLog[0]}`)
  return (
    <div className="tracker-page">
      <StackBarChart/>
    </div>
  )
};

export default TrackerPage;