<template>
  <div class="wrapper">
    <ul class="navbar">
      <nuxt-link :to="'/'">
        <li class="navbar-element navbar-active back">
          <a class="navbar-link">&lt;</a>
        </li>
      </nuxt-link>
      <li class="navbar-element title">
        参加した卓一覧
      </li>
    </ul>

    <div v-for="(board, index) in boards" :key="index">
      <p class="link-wrapper" v-if="board.data.state === 'open'">
        <nuxt-link class="link" :to="'/board/?' + board.id">{{board.data.name}}</nuxt-link>
      </p>
      <p p class="link-wrapper" v-else>
        <nuxt-link class="link" :to="'/board/?' + board.id">{{board.data.name}}</nuxt-link>
      </p>
    </div>

    <nuxt-link to="/board/create/" class="button-link create-button">卓を作成</nuxt-link>
  </div>

</template>


<script>
// 参加済み卓一覧
// TODO  卓の表示部分でE2Eテスト書く（if分岐に関して）

import getJoinedBoards from '~/db/getJoinedBoards';
import firebase from '~/plugins/firebase';

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
        me.boards = await getJoinedBoards();
      } catch (err) {
        console.log(err);
      }
    });
  }
};
</script>
