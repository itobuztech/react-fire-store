const utilities = {
  convertSnapShot: (doc) => {
    return {
      ...doc.data(),
      id: doc.ref.id
    }
  }
};

export { utilities };
