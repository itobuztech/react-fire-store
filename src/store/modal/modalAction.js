const modalAction = {
  openModal: (payload) => ({ type: 'SHOW_MODAL', payload }),

  closeModal: (payload) => ({ type: 'HIDE_MODAL', payload })
};

export { modalAction };
