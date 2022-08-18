import React from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from 'utils/firebase';

const useStorageFire = () => {
  async function onUploadFile(path, file) {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url || null;
  }

  return { onUploadFile };
};

export default useStorageFire;
