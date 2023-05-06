export const state = () => ({
  socket: null,
  user: null,
});

export const getters = {
  getSocket(state) {
    return state.socket;
  },
  getUser(state) {
    return state.user;
  },
};

export const mutations = {
  setSocket(state, socket) {
    state.socket = socket;
  },
  setUser(state, user) {
    state.user = user;
  },
};
