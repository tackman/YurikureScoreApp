import initialBoard from '../functions/initialBoard';
import createBoard from '~/db/createBoard';

export const state = () => ({
  board: initialBoard(),
  syncState: 'editing',
  bid: null
});

export const actions = {
  fetch(bid) {},
  async create({ commit, state }) {
    commit('updateSyncState', 'saving');

    try {
      let newBoard = {};
      Object.assign(newBoard, state.board);
      let result = await createBoard(newBoard);

      commit('updateSyncState', 'saved');
      commit('updateBid', result.id);
    } catch (err) {
      console.log(err);
      commit('updateSyncState', 'editing');
    }
  }
};

export const getters = {
  get(state) {
    return state;
  }
};

export const mutations = {
  updateSyncState(state, val) {
    state.syncState = val;
  },

  updateBid(state, val) {
    state.bid = val;
  },

  updateName(state, name) {
    state.board.name = name;
  },

  updateGirl(state, { index, url }) {
    state.board.girls[index].icon = url;
  },

  updateOwner(state, owner) {
    state.board.owner = owner;
  },

  updatePassphrase(state, passphrase) {
    state.board.passphrase = passphrase;
  },

  updatePlayers(state, players) {
    state.board.players = players;
  },

  updateGameState(state, gameState) {
    state.board.state = gameState;
  }
};
