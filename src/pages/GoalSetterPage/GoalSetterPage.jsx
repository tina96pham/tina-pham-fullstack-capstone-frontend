import "./GoalSetterPage.scss"
import TrackerForm from '../../components/TrackerForm/TrackerForm'
import  { useFetchWastelog } from "../../utils/useFetchData";

function GoalSetterPage () {

  const { wasteLog } = useFetchWastelog();
  console.log(`This is waste log data ${wasteLog[0]}`)
  return (
    <div className="tracker-page">
      <TrackerForm/>
    </div>
  )
};

export default GoalSetterPage;