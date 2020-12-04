import { firestore } from './firebase';

const productsApi = {
    getProducts: async() => {
      const snapshot = await firestore.collection('products').get();
      return snapshot.docs.map(doc => doc.data());
    },

    addProducts: async(payload) => {
      return await firestore.collection('products').add(payload);
    },

    deleteProduct: async(payload) => {
      return await firestore.collection('products').doc(payload).delete();
    }
};

export { productsApi };
