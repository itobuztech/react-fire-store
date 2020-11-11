import { auth } from './firebase';

const authApi = {
  signIn: async ({email, password}) => {
      const signedInUser = await auth.signInWithEmailAndPassword(email, password);
      return await signedInUser.user.getIdTokenResult();
  },

  signUp: async ({ email, password, name }) => {
    await auth.createUserWithEmailAndPassword(email, password);
    let user = auth.currentUser;
    return user.updateProfile({
      displayName: name
    });
  },

  logOut: async () => await auth.signOut()
};

export { authApi };
