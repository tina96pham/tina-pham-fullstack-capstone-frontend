import { useState } from 'react';
import WasteApi from '../utils/waste-api'
export const useSetGoal = () => {
  const [targetValue, setTargetValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); 
  const wasteApi= new WasteApi()

  const handleGoalInput = (e) => {
    setTargetValue(e.target.value)
  }
      
  const handleGoalSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

       const targetValueKg = parseFloat(targetValue); 
       if (!targetValueKg || isNaN(targetValueKg) || targetValueKg <= 0) {
         setError("Please enter a valid positive target value in kilograms.");
       }

      const formData = new FormData();
      formData.append('target_value_kg', targetValueKg);

      try {
          await wasteApi.postGoal(targetValueKg);
          setLoading(false);
          setSuccess("Goal set successfully"); 
      } catch (error) {
          setLoading(false);
          setError('Failed to upload. Please try again.');
          console.error('Error uploading data:', error);
      }
  };

  return {
      targetValue,
      success,
      loading,
      error,
      handleGoalInput,
      handleGoalSubmit
  };
};

