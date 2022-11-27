const baseFetch = (url: string) => {
  return fetch(`api/${url}`).then((res) => res.json());
};

export default baseFetch;
