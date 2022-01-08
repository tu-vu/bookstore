import axios from "axios";

const baseUrl = "http://localhost:3000/api/books";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const exportedObject = {
  getAll,
};

export default exportedObject;
