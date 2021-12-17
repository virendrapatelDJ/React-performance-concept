function sendFakeSearchRequest(search) {
  return fetch('https://fake-search-request.com/?search=' + search)
    .then(() => {})
    .catch(() => {});
}

export { sendFakeSearchRequest };
