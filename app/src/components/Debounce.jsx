import React, { useEffect, useState } from 'react';
import { useDebounce } from '../hooks';
import { sendFakeSearchRequest } from '../utils';

function WithDebounce() {
  const [search, setSearch] = useState('');

  const sendApiRequestForSearch = useDebounce((search) => {
    sendFakeSearchRequest(search);
  }, 400);

  useEffect(() => {
    if (search) sendApiRequestForSearch(search);
  }, [search]);

  const handleChange = ({ target: { name, value } }) => {
    console.log({ name, value });
    setSearch(value);
  };

  return (
    <div>
      <h3>With Debounce Example</h3>
      <p>Open Network Tab</p>
      <p>After typing it will wait for 500 ms and then send api request.</p>
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
function WithOutDebounce() {
  const [search, setSearch] = useState('');

  const sendApiRequestForSearch = () => {
    sendFakeSearchRequest(search);
  };

  useEffect(() => {
    if (search) sendApiRequestForSearch();
  }, [search]);

  const handleChange = ({ target: { name, value } }) => {
    console.log({ name, value });
    setSearch(value);
  };

  return (
    <div>
      <h3>Without Debounce Example </h3>
      <p>Open Network Tab</p>
      <p>It will send api request on every key stroke</p>
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

export default function Debounce() {
  return (
    <div>
      <h1>Debounce Example.</h1>
      <hr />
      <div className="row">
        <div className="col border p-3 rounded m-2">
          <WithDebounce />
        </div>

        <div className="col border p-3 rounded m-2">
          <WithOutDebounce />
        </div>
      </div>
    </div>
  );
}
