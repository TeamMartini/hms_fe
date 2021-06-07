import Routes from '../constants/routes';
import api from '../utils/api';

const AuthStore = () => ({
  token: null,
  username: null,
  name: null,
  admin: false,
  async login(username, password) {
    const { code, token } = await api.post(Routes.API.LOGIN, { username, password });
    if (code === 200) {
      // login success
      api.setToken(this.token = token);
      this.saveToken(token);
      return this.check();
    }
    // login failed || user check failed
    this.logout();
    return false;
  },
  logout() {
    this.username = null;
    this.name = null;
    this.admin = null;
    api.setToken(this.token = null);
    this.saveToken(null);
  },
  async check() {
    const { code: _code, info } = await api.get(Routes.API.CHECK);
    const { username: _username, name: _name, _admin } = info;
    if (_code === 200) {
      // user check success
      this.username = _username;
      this.name = _name;
      this.admin = _admin;
      return true;
    }
    return false;
  },
  saveToken(_token) {
    if (window) {
      window.localStorage.setItem('token', _token);
    }
  },
  checkAutoLogin() {
    if (window) {
      const stored = window.localStorage.getItem('token') || null;
      if (stored) {
        api.setToken(this.token = stored);
        this.check();
      }
    }
  },
});

export default AuthStore;
