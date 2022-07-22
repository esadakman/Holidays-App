import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (url) => {
    setLoading(true);
    const { data } = await axios.get(url);
    setData(data.response.holidays);
    setLoading(false);
  };

  return [data, loading, getData];
};

export default useFetch;
