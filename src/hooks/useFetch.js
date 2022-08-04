import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const useFetch = (url, method) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const config = {
    method: method,
    url: url,
    headers: { 
      'Accept': '*/*', 
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  };

  const getData = useCallback(async () => {
    try {
      await axios(config)
      .then(function (response) {
        setData(response.data);
        setLoading(false);
      })
      
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return { loading, data };
};
