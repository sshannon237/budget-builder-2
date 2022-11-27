import React, { useEffect, useState } from 'react';
import './App.css';
import baseFetch from './services';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    baseFetch('test?name=tod').then((res) => {
      console.log(res);
      setData(res.message);
    });
  });

  return <div>{data}</div>;
}

export default App;
