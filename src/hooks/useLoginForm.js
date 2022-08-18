import { useState } from 'react';
import useAuthFire from './useAuthFire';
import useErrorSingIn from './useErrorSingIn';

const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { singIn } = useAuthFire();
  const { mapAuthCodeToMessage } = useErrorSingIn();

  async function onSubmit(values) {
    setLoading(true);
    await singIn(values.email, values.password).catch((e) => {
      setError(mapAuthCodeToMessage(e.code, e.message));
    });

    setLoading(false);
  }

  return { onSubmit, loading, error };
};

export default useLoginForm;
