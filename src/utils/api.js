import axios from 'axios';

const api = (() => {
  let token = null;
  const _api = axios.create({
    baseURL: 'http://localhost:3003/api',
    timeout: 5000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  _api.interceptors.response.use(
    response => {
      if (response.data && !response.data.code) {
        return { code: 200, ...response.data };
      }
      return response.data;
    },
    error => {
      const _error = error;
      if (!_error.message) {
        _error.message = 'unknown error';
      }
      return Promise.reject(_error);
    },
  );

  function setToken(_token) {
    token = _token;
  }

  function get(path, data = {}) {
    return _api.get(path, {
      params: data,
      headers: {
        'x-access-token': token || '',
      },
    });
  }

  function post(path, data = {}) {
    let _data = data;
    if (typeof data === 'object') {
      _data = JSON.stringify(data);
    }
    return _api.post(path, _data, {
      headers: {
        'x-access-token': token || '',
      },
    });
  }
  return {
    _api,
    setToken,
    get,
    post,
  };
})();

export default api;
