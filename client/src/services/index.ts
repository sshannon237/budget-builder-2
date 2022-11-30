const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(`api/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

const post = async <T>(url: string, data: T): Promise<T> => {
  const response = await fetch(`api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

const http = {
  get,
  post,
};
export default http;
export { get, post };
