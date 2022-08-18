import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  setDoc,
  arrayUnion,
} from 'firebase/firestore';
import { Db } from 'utils/firebase';

const useFirestore = () => {
  const onCreateDocument = (collectionName, data) => {
    const collectionRef = collection(Db, collectionName);
    return addDoc(collectionRef, {
      ...data,
      createdAt: new Date(),
      active: true,
    });
  };

  const onCreateDocumentWithId = (collectionName, id, data) => {
    return setDoc(doc(Db, collectionName, id), {
      ...data,
      createdAt: new Date(),
      active: true,
    });
  };

  const onUpdateArray = (nameCollection, id, nameArray, updatedData) => {
    const docRef = doc(Db, nameCollection, id);
    return updateDoc(docRef, {
      [nameArray]: arrayUnion(updatedData),
      updatedAt: new Date(),
      updatedData,
    });
  };

  const onUpdate = (nameCollection, id, updatedData) => {
    const docRef = doc(Db, nameCollection, id);
    return updateDoc(docRef, {
      ...updatedData,
      updatedAt: new Date(),
      updatedData,
    });
  };

  const onDelete = (nameCollection, docId) => {
    const docRef = doc(Db, nameCollection, docId);
    return deleteDoc(docRef);
  };

  const getAllData = async (collectionName) => {
    const q = query(
      collection(Db, collectionName),
      // where("active", "==", true)
    );

    const data = await getDocs(q);

    return data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      ref: doc.ref,
    }));
  };

  const getDataMoreWhere = async (collectionName, funcWhere) => {
    const q = query(
      collection(Db, collectionName),
      funcWhere,
      where('active', '==', true),
    );

    const data = await getDocs(q);

    return data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      ref: doc.ref,
    }));
  };

  const getDataWhere = async (
    collectionName,
    filter,
    operator,
    valor,
    callback,
  ) => {
    const q = query(
      collection(Db, collectionName),
      where(filter, operator, valor),
      where('active', '==', true),
    );

    const data = await getDocs(q);

    return data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      ref: doc.ref,
    }));
  };

  const getData = async (nameCollection, docId) => {
    const docRef = doc(Db, nameCollection, docId);
    const data = await getDoc(docRef);
    return {
      ...data.data(),
      id: data.id,
      ref: data.ref,
    };
  };

  const getDataSubscribe = (nameCollection, docId, callback) => {
    const docRef = doc(Db, nameCollection, docId);

    return onSnapshot(docRef, (snapshot) => {
      const docs = {
        ...snapshot.data(),
        id: snapshot.id,
        ref: snapshot.ref,
      };

      if (typeof callback === 'function') callback(docs);
    });
  };

  async function getDocumentsSubscribe(collectionName, callback) {
    const q = query(
      collection(Db, collectionName),
      where('active', '==', true),
    );

    return onSnapshot(q, (snapshot) => {
      const docs = [];
      snapshot.forEach((doc) => {
        docs.push({
          ...doc.data(),
          id: doc.id,
          ref: doc.ref,
        });
      });

      if (typeof callback === 'function') callback(docs);
    });
  }

  const getDocumentsWhereSubscribe = async (
    collectionName,
    filter,
    operator,
    valor,
    callback,
  ) => {
    const q = query(
      collection(Db, collectionName),
      where(filter, operator, valor),
      where('active', '==', true),
    );
    return await onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({
          ...doc.data(),
          id: doc.id,
          ref: doc.ref,
        });
      });

      if (typeof callback === 'function') callback(docs);
    });
  };

  return {
    getData,
    getAllData,
    getDataWhere,
    onDelete,
    onUpdate,
    onCreateDocument,
    getDataSubscribe,
    getDocumentsSubscribe,
    getDocumentsWhereSubscribe,
    getDataMoreWhere,
    onCreateDocumentWithId,
    onUpdateArray,
  };
};

export default useFirestore;
