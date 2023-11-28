import { Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'


const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setErr] = useState(null);
  
    const fetchData = async () => {
      setIsLoading(true);
  
      try {
        const response = await axios.get('http://localhost:3001/api/allProduct');
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setErr(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const refetch = () => {
      setIsLoading(true);
      fetchData();
    };
  
    // Return an object with properties
    return { data, isLoading, error, refetch };
  };
  
  export default useFetch;
  

