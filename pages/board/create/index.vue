
<template>
  <section class="wrapper">
    <ul class="navbar">
      <nuxt-link :to="'/profile/joined/'">
        <li class="navbar-element navbar-active back">
          <a class="navbar-link">&lt;</a>
        </li>
      </nuxt-link>
      <li class="navbar-element title">
        卓作成画面
      </li>
    </ul>

    <div><input class="title-input " type="text " v-model="name " /></div>

    <div class="input-wrapper ">
      <div>
        <img :src="girl1 " class="girl-icon " />
      </div>
      <div>
        <input type="text " v-model="girl1 " />
      </div>
      <div>
        <img :src="girl2 " class="girl-icon " />
      </div>
      <div>
        <input type="text " v-model="girl2 " />
      </div>
      <div>
        <img :src="girl3 " class="girl-icon " />
      </div>
      <div>
        <input type="text " v-model="girl3 " />
      </div>
      <div>
        <img :src="girl4 " class="girl-icon " />
      </div>
      <div><input type="text " v-model="girl4 " /></div>
      <div><img :src="girl5 " class="girl-icon " /></div>
      <div><input type="text " v-model="girl5 " /></div>
      <div><img :src="girl6 " class="girl-icon " /></div>
      <div><input type="text " v-model="girl6 " /></div>
      <div><img :src="girl7 " class="girl-icon " /></div>
      <div><input type="text " v-model="girl7 " /></div>
      <div><img :src="girl8 " class="girl-icon " /></div>
      <div><input type="text " v-model="girl8 " /></div>
      <div><img :src="girl9 " class="girl-icon " /></div>
      <div><input type="text " v-model="girl9 " /></div>
    </div>
    <button class="create-button " :disabled="submitDisabled " v-on:click="onSubmit ">{{buttonText}}</button>
    <div>{{message}}</div>
  </section>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  data: () => {
    return {
      submitDisabled: false,
      buttonText: '作成！',
      message: ''
    };
  },

  methods: {
    async onSubmit() {
      this.submitDisabled = true;
      this.buttonText = '送信中…';

      await this.$store.dispatch('board/create');

      if (this.$store.state.board.syncState === 'saved') {
        this.$router.push('/board/?' + this.$store.state.board.bid);
      } else {
        this.message = '送信に失敗しました';
        this.submitDisabled = false;
        this.buttonText = '作成！';
      }
    }
  },

  computed: {
    name: {
      get() {
        return this.$store.state.board.board.name;
      },
      set(value) {
        this.$store.commit('board/updateName', value);
      }
    },

    girl0: {
      get() {
        return this.$store.state.board.board.girls[0].icon;
      },

      set(value) {
        console.log(value);
        this.$store.commit('board/updateGirl', { index: 0, url: value });
      }
    },
    girl1: {
      get() {
        return this.$store.state.board.board.girls[1].icon;
      },

      set(value) {
        this.$store.commit('board/updateGirl', { index: 1, url: value });
      }
    },
    girl2: {
      get() {
        return this.$store.state.board.board.girls[2].icon;
      },

      set(value) {
        this.$store.commit('board/updateGirl', { index: 2, url: value });
      }
    },
    girl3: {
      get() {
        return this.$store.state.board.board.girls[3].icon;
      },

      set(value) {
        this.$store.commit('board/updateGirl', { index: 3, url: value });
      }
    },
    girl4: {
      get() {
        return this.$store.state.board.board.girls[4].icon;
      },

      set(value) {
        this.$store.commit('board/updateGirl', { index: 4, url: value });
      }
    },
    girl5: {
      get() {
        return this.$store.state.board.board.girls[5].icon;
      },

      set(value) {
        this.$store.commit('board/updateGirl', { index: 5, url: value });
      }
    },
    girl6: {
      get() {
        return this.$store.state.board.board.girls[6].icon;
      },

      set(value) {
        this.$store.commit('board/updateGirl', { index: 6, url: value });
      }
    },
    girl7: {
      get() {
        return this.$store.state.board.board.girls[7].icon;
      },

      set(value) {
        this.$store.commit('board/updateGirl', { index: 7, url: value });
      }
    },
    girl8: {
      get() {
        return this.$store.state.board.board.girls[8].icon;
      },

      set(value) {
        this.$store.commit('board/updateGirl', { index: 8, url: value });
      }
    },
    girl9: {
      get() {
        return this.$store.state.board.board.girls[9].icon;
      },

      set(value) {
        this.$store.commit('board/updateGirl', { index: 9, url: value });
      }
    }
  }
};
</script>

<style scoped>
.input-wrapper {
  grid-template-columns: 50px, 160px;
  display: grid;
  width: 75%;
  background-color: antiquewhite;
  align-content: center;
  align-items: center;
  align-self: center;
}

.title-input {
  font-size: 20px;
}
</style>