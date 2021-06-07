import React, { useEffect } from 'react';
import { useAuthStore } from '../../stores';

const LoginChecker = () => {
  const { checkAutoLogin } = useAuthStore();
  useEffect(() => { checkAutoLogin(); }, [checkAutoLogin]);

  return <p style={{ display: 'none' }} />;
};

export default LoginChecker;
