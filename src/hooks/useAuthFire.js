import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from 'utils/firebase';

const useAuthFire = () => {
  async function singIn(email, password) {
    return await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        return userCredential.user;
      },
    );
  }

  async function createUser(email, password) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await sendEmailVerification(userCredential.user);
    return userCredential.user;
  }

  async function updateUser(data) {
    return await updateProfile(auth.currentUser, data);
  }

  function authState(callback) {
    return onAuthStateChanged(auth, callback);
  }

  async function resetPasswordEmail(email) {
    return await sendPasswordResetEmail(auth, email);
  }

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      console.error('Error from context: ', e);
    }
  };

  return {
    singIn,
    logout,
    authState,
    resetPasswordEmail,
    createUser,
    updateUser,
  };
};

export default useAuthFire;
