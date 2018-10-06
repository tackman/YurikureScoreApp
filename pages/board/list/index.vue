<template>
  <div class="container">
    <h1>最近の卓一覧</h1>
    <div v-for="(board, index) in boards" :key="index">
      <nuxt-link :to="'/board/?' + board.id">{{board.data.name}}</nuxt-link>
    </div>
  </div>
</template>


<script>
import firebase from '~/plugins/firebase';
import getOpenBoards from '~/db/getOpenBoards';

export default {
  data: () => {
    return {
      boards: []
    };
  },

  mounted: function(context) {
    let me = this;
    firebase.auth().onAuthStateChanged(async function(user) {
      try {
        me.boards = await getOpenBoards();
      } catch (err) {
        console.log(err);
      }
    });
  }
};
</script>