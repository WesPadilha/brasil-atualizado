import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CovidData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>COVID-19 Data for Brazil</h1>
      {data.data.map((item, index) => (
        <div key={index}>
          <h2>{item.state}</h2>
          <p>Confirmed: {item.cases}</p>
          <p>Deaths: {item.deaths}</p>
        </div>
      ))}
    </div>
  );
};

export default CovidData;
