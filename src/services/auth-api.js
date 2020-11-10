import { auth } from './firebase';

const authApi = {
  signIn: async ({email, password}) => {
    try {
      const signedInUser = await auth.signInWithEmailAndPassword(email, password);
      return signedInUser.users[0];
    } catch(err) {
      return err.error.message;
    }
  },

  signUp: async ({ email, password, name }) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      let user = auth.currentUser;
      user.updateProfile({
        displayName: name
      });
      // user.providerData.forEach(pro => console.log(pro));
    } catch(err) {
      return err.error.message;
    }
  }
};

export { authApi };
