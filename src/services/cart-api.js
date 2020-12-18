import { firestore } from './firebase';

import { utilities } from '../services/utilities';

const cartsApi = {
    getCart: async() => {
      const snapshot = await firestore.collection('cart').get();
      return snapshot.docs.map(doc => utilities.convertSnapShot(doc));
    },

    addToCart: async(payload) => {
      return await firestore.collection('cart').add(payload);
    },

    editProductInCart: async(payload, docId) => {
      return await firestore.collection('cart').doc(docId)
        .set({
          ...payload
        })
    },

    deleteProductFromCart: async(id) => {
      return await firestore.collection('cart').doc(id).delete();
    }
};

export { cartsApi };
