import { firestore } from './firebase';

import { utilities } from '../services/utilities';

const productsApi = {
    getProducts: async() => {
      const snapshot = await firestore.collection('products').get();
      return snapshot.docs.map(doc => utilities.convertSnapShot(doc));
    },

    addProducts: async(payload) => {
      return await firestore.collection('products').add(payload);
    },

    editProduct: async(payload, docId) => {
      return await firestore.collection('products').doc(docId)
        .set({
          ...payload
        })
    },

    deleteProduct: async(id) => {
      return await firestore.collection('products').doc(id).delete();
    }
};

export { productsApi };
