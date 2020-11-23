import { firestore } from './firebase';

const productsApi = {
    getProudcts: async() => {
      return await firestore.collection('products').get()
            .then((querySnapshot) => querySnapshot.docs());
    }
};

export { productsApi };
















