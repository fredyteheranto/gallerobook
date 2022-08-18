import { useState } from 'react';
import useAuthFire from './useAuthFire';
import useFirestore from './useFirestore';

const useRegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { createUser } = useAuthFire();
  const { onCreateDocumentWithId } = useFirestore();

  async function onSubmit(values) {
    setLoading(true);
    const response = await createUser(values.email, values.password).catch((e) =>
      setError(e.message),
    );
    if (response) {
      await onCreateDocumentWithId('USERS', response.uid, {
        fullName: values.fullName,
        phone: values.phone,
        email: values.email,
        username: values.username,
        role: 'USER',
      }).catch((e) => setError(e));
    }
    setLoading(false);
  }

  return { onSubmit, loading, error };
};

export default useRegisterForm;
