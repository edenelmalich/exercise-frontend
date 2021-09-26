import axios from "axios";
import config from "../../config";
import constants from "../constants";

const BASE_URL = "https://asos2.p.rapidapi.com/products/v2/"

const getProductsList = () => {
  const options = {
    headers: {
      'x-rapidapi-host': constants.ASOS_HOST,
      'x-rapidapi-key':  config.ASOS_KEY
    },
    params: {
      categoryId: constants.DRESSES_CATEGORY_ID
    }
  }
  return axios.get(`${BASE_URL}list`, options);
}

const asosApi = {
  getProductsList,
}

export default asosApi
