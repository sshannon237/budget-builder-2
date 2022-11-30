import React, { useState } from 'react';
import './App.css';
import { get } from './services';
import { useFetch } from './utils/useFetch';
import { message } from '@budget-builder/common/models/message';

const App = () => {
  const [data, setData] = useState<string>('');

  // useEffect(() => {
  //   (async () => {
  //     const testData = await get<any>('test?name=tod');
  //     setData(testData.message);
  //   })();
  // }, []);

  useFetch(async () => {
    const testData = await get<message>('test?name=tod');
    setData(testData.message);
  });

  return <div>{data}</div>;
};

export default App;
