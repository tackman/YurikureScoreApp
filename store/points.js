import initialPoints from '~/functions/initialPoints';

export const state = () => initialPoints();

export const mutations = {
  updateSelectedGirl(state, update) {
    state.selectedGirlInduces[update.objective] = update.newIndex;
  },

  updateInput(state, e) {
    state.inputs[e.target.attributes.inputfield.value] = Number(e.target.value);
  },

  updateAllInputs(state, inputs) {
    state.inputs = inputs;
  },

  updateAllSelectedGirls(state, value) {
    state.selectedGirlInduces = value;
  },

  updateBid(state, bid) {
    state.bid = bid;
  }
};

import generateControlPoints from '~/functions/generateControlPoints.js';
import updateInputs from '~/db/updateInputs';
import updateSelectedGirl from '~/db/updateSelectedGirl';
import getUserEntry from '~/db/getUserEntry';
import firebase from '~/plugins/firebase';

export const actions = {
  updateInputPermanent({ commit, state }, params) {
    commit('updateInput', params.event);

    const bid = params.bid;
    const user = firebase.auth().currentUser;

    if (User) {
      updateInputs(bid, state.inputs, params.event);
    }
  },

  updateSelectedGirlPermanent({ commit, state }, update) {
    commit('updateSelectedGirl', update);
    const bid = update.bid;

    const user = firebase.auth().currentUser;
    if (user) {
      updateSelectedGirl(bid, state.selectedGirlInduces, update);
    }
  },

  async fetchInputs({ commit, state }, bid) {
    const user = firebase.auth().currentUser;
    if (user) {
      getUserEntry('inputs', bid).then(function(value) {
        if (value) {
          commit('updateAllInputs', value);
        }
      });

      getUserEntry('selectedGirls', bid).then(function(value) {
        console.log('fetched selectedGirls', value);
        if (value) {
          commit('updateAllSelectedGirls', value);
        }
      });
    }
  }
};

export const getters = {
  state(state) {
    return state;
  },

  controlPoints(state) {
    return generateControlPoints(state);
  },

  inputs(state) {
    return state.inputs;
  },

  selectedGirlInduces(state) {
    return state.selectedGirlInduces;
  }
};
