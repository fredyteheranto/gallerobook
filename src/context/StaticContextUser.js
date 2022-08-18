import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import useAuthFire from 'hooks/useAuthFire';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'utils/firebase';
import useFirestore from 'hooks/useFirestore';

// Context
const AppContext = createContext();

// Provider
export const AppContextProvider = ({ children }) => {
  const { logout } = useAuthFire();
  const { getData } = useFirestore();
  const history = useHistory();
  const [userAuth, loadingAuth] = useAuthState(auth);
  const [loading, setLoading] = useState(loadingAuth);
  const [user, setUser] = useState(userAuth);
  const [authId, setAuthId] = useState(user?.uid);
  const [isSession, setIsSession] = useState(authId != null);

  useEffect(() => {
    if (authId == null) return;
    setIsSession(true);
    getDataFirebase(authId);
  }, [authId]);

  useEffect(() => {
    if (userAuth == null) return;
    onAuthStateChange(userAuth);
  }, [userAuth]);

  useEffect(() => {
    setLoading(loadingAuth);
  }, [loadingAuth]);

  useEffect(() => {
    console.log('user :', user);
  }, [user]);

  async function refetch() {
    const response = await getData('USERS', authId);
    setUser((old) => ({ ...old, ...response }));
  }

  async function getDataFirebase(id) {
    setLoading(true);
    const response = await getData('USERS', id);
    setUser((old) => ({ ...old, ...response }));
    setLoading(false);
  }

  function onAuthStateChange(user) {
    setUser(user);
    setAuthId(user?.uid);
  }

  function onLogout() {
    logout();
    setAuthId(null);
    setIsSession(false);
    history.replace('/login');
  }

  const values = useMemo(
    () => ({
      authId, // States que seran visibles en el contexto.
      isSession,
      onLogout,
      user,
      loading,
      refetch,
    }),
    [authId, user, isSession, loading],
  ); // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;
