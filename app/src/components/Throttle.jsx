import React, { useEffect, useState } from 'react';
import { useThrottle } from '../hooks';
import { sendFakeSearchRequest } from '../utils';

export default function Throttle() {
  const [search, setSearch] = useState('');

  const sendApiRequestForSearch = useThrottle((search) => {
    sendFakeSearchRequest(search);
  }, 1000);

  useEffect(() => {
    if (search) sendApiRequestForSearch(search);
  }, [search]);

  const handleChange = ({ target: { name, value } }) => {
    console.log({ name, value });
    setSearch(value);
  };

  return (
    <div>
      <h3>With Throttle Example</h3>
      <p>Open Network Tab</p>
      <p>It will sent Api Request after 1 sec of last api call.</p>
      <hr />
      <div className="m-4">
        <div class="mb-3">
          <label for="" class="form-label">
            Search Something
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Search Here"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
