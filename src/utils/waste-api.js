import axios from 'axios';

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
    const response = await axios.get(`${this.baseUrl}/api/wastelog`);
    return response.data;
  } catch (error) {
    console.error(`Unable to get waste type data: ${error}`);
  }
}

}

export default WasteApi;