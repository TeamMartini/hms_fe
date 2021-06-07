import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useAuthStore } from '../../stores';

const LoginChecker = observer(() => {
  const { checkAutoLogin, username } = useAuthStore();
  useEffect(() => {
    async function check() {
      await checkAutoLogin();
    } check();
  }, [checkAutoLogin, username]);

  return <p style={{ display: 'none' }} />;
});

export default LoginChecker;
