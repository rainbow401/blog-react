import {useEffect, useState} from "react";
import axios from "axios";

const useRequest = (url, data, config) => {

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const request = async () => {
    setLoading(true);
    try {

      const  result = await axios({
        url,
        params: data,
        method: 'get',
      });

      if (result && result.status >= 200 && result.status < 304) {
        setResult(data);
      } else {
        setError(new Error('request is error'))
      }

    } catch (e) {
      setError(e);
    }

    setLoading(false);
  };

  useEffect(() => {
    request().then(r => {
      console.log('request success')
    });
  }, [request]);

  return {
    loading,
    result,
    error
  }
}

export default useRequest;