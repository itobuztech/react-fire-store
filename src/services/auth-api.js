import { auth } from './firebase';

const authApi = {
  signIn: async ({email, password}) => {
    try {
      return await auth.signInWithEmailAndPassword(email, password);
    } catch(err) {
      return err;
    }
  },

  signUp: async ({ email, password }) => {
    try {
      return await auth.createUserWithEmailAndPassword(email, password);
    } catch(err) {
      return err;
    }
  }
};

export { authApi };
