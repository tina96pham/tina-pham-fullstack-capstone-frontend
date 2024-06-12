import { useState } from "react";
import WasteApi from "../utils/waste-api";
export const useSetGoal = () => {
  const [targetValue, setTargetValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const wasteApi = new WasteApi();

  const handleGoalInput = (e) => {
    setTargetValue(e.target.value);
  };

  const handleGoalSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const targetValueKg = parseFloat(targetValue);
    if (!targetValueKg || isNaN(targetValueKg) || targetValueKg <= 0) {
      setTargetValue(targetValueKg);
      setError("Please enter a valid positive target value in kilograms.");
    }

    const newGoal = { target_value_kg: targetValue };
    try {
      await wasteApi.postGoal(newGoal);
      setLoading(false);
      setSuccess("Goal set successfully");
      setTargetValue("")
    } catch (error) {
      setLoading(false);
      setError("Failed to upload. Please try again.");
      console.error("Error uploading data:", error);
    }
  };

  return {
    targetValue,
    success,
    loading,
    error,
    handleGoalInput,
    handleGoalSubmit,
  };
};

export const useTrackProgress = () => {
  const initialFormField= {
    date: "",
    productType: "",
    productName: "",
    quantity: "",
  }
  const [record, setRecord] = useState(initialFormField);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const wasteApi = new WasteApi();

  const handleRecordInput = (e) => {
    const { name, value } = e.target;
    setRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value,
    }));
    console.log(record)
  };

  const handleRecordSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    for (const key in record) {
      if (record[key].trim() === "" && key !== "quantity") {
        setError(`Please fill in the ${key} field.`);
        return;
      }
    }
    if (!record.quantity || isNaN(record.quantity) || record.quantity <= 0) {
      setError("Quantity must be a positive number.");
      return;
    }
   
    const newRecord= {
      "date": record.date,
      "productType": record.productType,
      "productName": record.productName,
      "quantity": parseInt(record.quantity)
    }

    try {
      await wasteApi.postRecord(newRecord);
      setLoading(false);
      setSuccess("Record upload successfully");
      setRecord(initialFormField)
    } catch (error) {
      setLoading(false);
      setError("Failed to upload. Please try again.");
      console.error("Error uploading data:", error);
    }
  };

  return {
    record,
    success,
    loading,
    error,
    handleRecordInput,
    handleRecordSubmit,
  };
};



