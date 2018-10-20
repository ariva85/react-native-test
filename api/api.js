const baseUrl = 'http://www.mocky.io/v2/';

const callFetch = async (apiUrl, options = {}) => {
  try {
    const effectiveOptions = {
      headers: {
        //'content-type': 'application/json'
      },
      ...options
    };

    const response = await fetch(baseUrl + apiUrl, effectiveOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error:', error);
    return { err: error };
  }
};

const api = {};

api.getList = async () => {
  const parameters = {};
  return callFetch('5bcae1272f0000630075be24');
};

export default api;
