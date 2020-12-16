import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json",
    Authorization: `Token ${localStorage.getItem("access_token")}`,
  },
});
