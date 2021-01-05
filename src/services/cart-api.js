import { firestore } from './firebase';

import { utilities } from '../services/utilities';

const cartsApi = {
    getCart: async() => {
      const snapshot = await firestore.collection('cart').get();
      return snapshot.docs.map(doc => utilities.convertSnapShot(doc));
    },

    addToCart: async(payload) => {
      const data = {
        ...payload,
        productId: payload.id
      }
      console.log(data);
      return await firestore.collection('cart').add(data);
    },

    editProductInCart: async(payload, docId) => {
      return await firestore.collection('cart').doc(docId)
        .set({
          ...payload
        })
    },

    updateQuantity: async(product) => {
      return await firestore.collection('cart').doc(product.id)
        .update({quantity: product.quantity})
    },

    deleteProductFromCart: async(id) => {
      return await firestore.collection('cart').doc(id).delete();
    }
};

export { cartsApi };
