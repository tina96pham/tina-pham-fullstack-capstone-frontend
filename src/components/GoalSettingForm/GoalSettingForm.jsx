import React from 'react';
import "./GoalSettingForm.scss"
import { useSetGoal } from '../../utils/useFormHandler'; 

function GoalSettingForm() {
  const { targetValue, loading, error, success, handleGoalInput, handleGoalSubmit } = useSetGoal();

  return (
    <>
    <form onSubmit={handleGoalSubmit} className="goal-form"> 
      <div className="goal-form__container">
        <label
          className="goal-form__label"
          htmlFor="targetValue"
        >
          <p className="goal-form__text">Set Your New Weekly Waste Disposal Goal :</p>
        </label>
        <input
          className="goal-form__input"
          name="targetValue"
          type="number"
          placeholder="Set New Waste Goal (kg)"
          id="targetValue"
          value={targetValue}
          onChange={handleGoalInput}
          min="0" 
          required
        />
      </div>
      <button 
        className="goal-form__btn" type="submit" disabled={loading}>
        <p className=" goal-form__btn-text">{loading ? 'Uploading...' : 'Set New Goal'}</p>
      </button>
    </form>
    {error && <div className="goal-form__msg goal-form__msg--error" >{error}</div>}
    {success && <div className="goal-form__msg goal-form__msg--success" >{success}</div>}
    </>
  );
}

export default GoalSettingForm;