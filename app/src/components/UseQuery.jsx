import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';


export default function UseQueryDemo() {
  
  const query = useQuery('photos', () => {
    return fetch('https://jsonplaceholder.typicode.com/photos').then(
      (response) => response.json()
    );
  });

  const { data } = query || {};
  // console.log(data);
  return (
    <div>
    {!data?.length && <h1>No Data</h1>}
      <ul>
        {data?.map((photo, id) => (
          <li key={id}>{photo.title}</li>
        ))}
      </ul>
    </div>
  );
}

function WithoutUseQueryDemo() {
    const [data , setData ] = useState([])
  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/photos').then(
        (response) => response.json()
      ).then(data=>setData(data))
  }, [])
  return (
    <div>
        {!data.length && <h1>No Data</h1>}
      <ul>
        {data?.map((photo, id) => (
          <li key={id}>{photo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export { WithoutUseQueryDemo };
