import React, { useState } from 'react';
import Debounce from './Debounce';
import Throttle from './Throttle';
import UseQueryDemo, { WithoutUseQueryDemo } from './UseQuery';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useIsMobile } from '../hooks';
const queryClient = new QueryClient();

export default function Home() {
  const [show, setShow] = useState(true);
  const isMobile = useIsMobile(400);
  console.log({ isMobile });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mt-4 border rounded p-4">
        <h1>{isMobile ? 'Mobile Screen' : 'Desktop Screen'}</h1>
        <hr />
        <Debounce />
        <hr />
        <Throttle />
        <hr />
        <button className="btn btn-success" onClick={() => setShow(!show)}>
          Toggle Block
        </button>
        <hr />
        <div id="queryExample">
          {show && (
            <div className="row">
              <div className="col border m-2 p-3">
                <UseQueryDemo />
              </div>
              <div className="col border m-2 p-3">
                <WithoutUseQueryDemo />
              </div>
            </div>
          )}
        </div>
      </div>
    </QueryClientProvider>
  );
}
