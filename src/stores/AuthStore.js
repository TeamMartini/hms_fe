import Routes from '../constants/routes';
import api from '../utils/api';

const AuthStore = () => ({
  token: null,
  username: null,
  name: null,
  async login(username, password) {
    const { code, token } = await api.post(Routes.API.LOGIN, { username, password });
    if (code === 200) {
      // login success
      api.setToken(this.token = token);
      const { code: _code, username: _username, name: _name } = api.get(Routes.API.CHECK);
      if (_code === 200) {
        // user check success
        this.username = _username;
        this.name = _name;
        return true;
      }
    }
    // login failed || user check failed
    this.logout();
    return false;
  },
  logout() {
    this.username = null;
    this.name = null;
    api.setToken(this.token = null);
  },
});

export default AuthStore;
