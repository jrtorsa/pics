import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID wagwH3PDnRg8mbJxYyeeQSWMgLYwtOdYdmDyIX4Ng_8",
  },
});
