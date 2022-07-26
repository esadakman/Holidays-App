import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (url) => {
    setLoading(true);
    const { data } = await axios.get(url);
    setInfo(data.response.holidays);
    setLoading(false);
  };

  return [info, loading, getData];
};

export default useFetch;
