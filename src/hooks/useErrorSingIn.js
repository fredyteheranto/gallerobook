import React from 'react';

const useErrorSingIn = () => {
  function mapAuthCodeToMessage(authCode, message) {
    switch (authCode) {
      case 'auth/wrong-password':
        return 'Invalid password';
      case 'auth/invalid-password':
        return 'Password provided is not corrected';
      case 'auth/invalid-email':
        return 'Email provided is invalid';
      case 'auth/user-not-found':
        return 'There is no existing user record corresponding to the provided identifier.';
      case 'auth/email-already-exists':
        return 'The provided email is already in use by an existing user. Each user must have a unique email.';
      default:
        return message;
    }
  }

  return { mapAuthCodeToMessage };
};

export default useErrorSingIn;
