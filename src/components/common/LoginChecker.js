import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useAuthStore } from '../../stores';

const LoginChecker = observer(() => {
  const { checkAutoLogin, username } = useAuthStore();
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    async function check() {
      await checkAutoLogin();
      let query = location.search.substr(1);
      if (query.startsWith('ref=') && username) {
        query = query.substr(4);
        history.push(query);
      }
    } check();
  }, [checkAutoLogin, history, location.search, username]);

  return <p style={{ display: 'none' }} />;
});

export default LoginChecker;
