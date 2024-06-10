import axios from "axios";

class WasteApi {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }

  // GET wast types info
  async getAllWasteTypes() {
    try {
      const response = await axios.get(`${this.baseUrl}/api/wastes`);
      return response.data;
    } catch (error) {
      console.error(`Unable to get waste type data: ${error}`);
    }
  }

  // GET wast record info
  async getAllRecords() {
    try {
      const response = await axios.get(`${this.baseUrl}/api/records`);
      return response.data;
    } catch (error) {
      console.error(`Unable to get waste type data: ${error}`);
    }
  }

  // Get Product Waste Search Info
  async searchProducts(search) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/api/products?s=${search}`
      );
      return response.data;
    } catch (error) {
      console.error(`Unable to search for "${search}": ${error}`);
    }
  }

  async postGoal(newGoal) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/goals`, newGoal);
      return response.data;
    } catch (error) {
      console.error(`Unable to post new goal: ${error}`);
    }
  }
  async postRecord(newRecord) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/records`, newRecord);
      return response.data;
    } catch (error) {
      console.error(`Unable to post new goal: ${error}`);
    }
  }
}

export default WasteApi;
