const baseUrl = 'http://www.mocky.io/v2/';

const callFetch = async (apiUrl, options = {}) => {
  try {
    const effectiveOptions = {
      headers: {
        'content-type': 'application/json'
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
  return callFetch('5bcb2e832f0000610075be9b');
};

export default api;
