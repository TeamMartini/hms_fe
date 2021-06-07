import Routes from '../constants/routes';
import api from '../utils/api';

const AuthStore = () => ({
  token: null,
  username: '',
  name: null,
  admin: false,
  checked: false,
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
    this.checked = true;
    const { code: _code, info } = await api.get(Routes.API.CHECK);
    if (_code === 200) {
      // user check success
      this.username = info.username;
      this.name = info._name;
      this.admin = info._admin;
      this.checked = true;
      return true;
    }
    this.checked = true;
    return false;
  },
  saveToken(_token) {
    if (window) {
      window.localStorage.setItem('token', _token);
    }
  },
  async checkAutoLogin() {
    if (window) {
      const stored = window.localStorage.getItem('token') || null;
      if (stored) {
        api.setToken(this.token = stored);
        await this.check();
      }
    }
  },
});

export default AuthStore;
