import "./ActionPage.scss";
import GoalSettingForm from "../../components/GoalSettingForm/GoalSettingForm";
import TrackerForm from "../../components/TrackerForm/TrackerForm";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

function ActionPage() {
  const[formOpen, setFormOpen] = useState(false)
  return (
    <div className="action-page">
      <div className="action-page__cta">
        <h2 className="action-page__header">Taking Action</h2>
        <div className="action-page__action-container">
          <h3> Proper Waste Disposal</h3>
          <p>
            Our planet is facing a waste crisis, but together, we can make a
            difference. It starts with you! By taking responsibility for our
            trash, we can create a cleaner, healthier environment for ourselves
            and future generations.
          </p>
          <SearchBar/>
         
          <button className="action-page__btn" onClick={()=>{setFormOpen(true)}}>
            <p className="action-page__btn-text">Track my habit</p>
          </button>
        </div>
      </div>
      { formOpen &&
        <TrackerForm setFormOpen={setFormOpen} />
      }
      <div className="action-page__goal-setter">
        <h2 className="action-page__header">✨Goal Setter✨</h2>
        <div className="action-page__action-container">
          <h3> Less trash more treasure</h3>
          <p>
            We all create waste. An average person in Toronto generates about{" "}
            <span className="action-page__text--important">
              15.6 kg of wastes per week
            </span>
            . That's a lot of trash! 🤯
          </p>
          <p>
            This waste has a significant impact on our environment, contributing
            to pollution, climate change, and resource depletion. But here's the
            good news: we have the power to change that.
          </p>
          <GoalSettingForm />
          
        </div>
      </div>
    </div>
  );
}

export default ActionPage;
