<template>
  <div class="support-pair-wrapper">
    <ul class="navbar">
      <nuxt-link :to="backLink">
        <li class="navbar-element back">
          <a class="navbar-link">&lt;</a>
        </li>
      </nuxt-link>
      <li v-bind:class="{'navbar-element': true, 'navbar-active': showIndex === 0} ">
        <a class="navbar-link" v-on:click="onClickBase">基本支援点</a>
      </li>
      <li v-bind:class="{'navbar-element': true, 'navbar-active': showIndex === 1} ">
        <a class="navbar-link" v-on:click="onClickAdd1">追加1</a>
      </li>
      <li v-bind:class="{'navbar-element': true, 'navbar-active': showIndex === 2} ">
        <a class="navbar-link" v-on:click="onClickAdd2">追加2</a>
      </li>
    </ul>
    <transition name="custom-classes-transition" v-bind:enter-active-class="basePointsEnter" v-bind:leave-active-class="basePointsLeave">
      <div class="support-pair-base-wrapper" v-show="showIndex === 0">
        <h2 class="support-point-title">基本支持組</h2>
        <support-pair-icons class="support-point-icons1" v-bind="{left: 'pair1Left', right: 'pair1Right', bid: bid}" />
        <support-pair-icons class="support-point-icons2" v-bind="{left: 'pair2Left', right: 'pair2Right', bid: bid}" />
        <support-pair-icons class="support-point-icons3" v-bind="{left: 'pair3Left', right: 'pair3Right', bid: bid}" />
        <support-pair-icons class="support-point-icons4" v-bind="{left: 'pair4Left', right: 'pair4Right', bid: bid}" />
        <support-pair-icons class="support-point-icons5" v-bind="{left: 'pair5Left', right: 'pair5Right', bid: bid}" />
        <h2 class="support-point-base">基本支持点</h2>
        <input class="support-point-base-1 support-point-common" :value="inputs.supportPointBase1" @input="updateInput" inputfield="supportPointBase1">
        <input class="support-point-base-2 support-point-common" :value="inputs.supportPointBase2" @input="updateInput" inputfield="supportPointBase2">
        <input class="support-point-base-3 support-point-common" :value="inputs.supportPointBase3" @input="updateInput" inputfield="supportPointBase3">
        <input class="support-point-base-4 support-point-common" :value="inputs.supportPointBase4" @input="updateInput" inputfield="supportPointBase4">
        <input class="support-point-base-5 support-point-common" :value="inputs.supportPointBase5" @input="updateInput" inputfield="supportPointBase5">
      </div>
    </transition>

    <transition name="custom-classes-transition" v-bind:enter-active-class="add1PointsEnter" v-bind:leave-active-class="add1PointsLeave">
      <div class="support-pair-base-wrapper" v-show="showIndex === 1">
        <h2 class="support-point-title">追加支持組</h2>
        <support-pair-icons class="support-point-icons1" v-bind="{left: 'pair6Left', right: 'pair6Right', bid: bid}" />
        <support-pair-icons class="support-point-icons2" v-bind="{left: 'pair7Left', right: 'pair7Right', bid: bid}" />
        <support-pair-icons class="support-point-icons3" v-bind="{left: 'pair8Left', right: 'pair8Right', bid: bid}" />

        <h2 class="support-point-base">追加支持点</h2>
        <input class="support-point-base-1 support-point-common" :value="inputs.supportPointAdd1_1" @input="updateInput" inputfield="supportPointAdd1_1">
        <input class="support-point-base-2 support-point-common" :value="inputs.supportPointAdd1_2" @input="updateInput" inputfield="supportPointAdd1_2">
        <input class="support-point-base-3 support-point-common" :value="inputs.supportPointAdd1_3" @input="updateInput" inputfield="supportPointAdd1_3">
      </div>
    </transition>

    <transition name="custom-classes-transition" v-bind:enter-active-class="add2PointsEnter" v-bind:leave-active-class="add2PointsLeave">
      <div class="support-pair-base-wrapper" v-show="showIndex === 2">
        <h2 class="support-point-title">追加支持組</h2>
        <support-pair-icons class="support-point-icons1" v-bind="{left: 'pair9Left', right: 'pair9Right', bid: bid}" />
        <support-pair-icons class="support-point-icons2" v-bind="{left: 'pair10Left', right: 'pair10Right', bid: bid}" />
        <support-pair-icons class="support-point-icons3" v-bind="{left: 'pair11Left', right: 'pair11Right', bid: bid}" />
        <support-pair-icons class="support-point-icons4" v-bind="{left: 'pair12Left', right: 'pair12Right', bid: bid}" />
        <support-pair-icons class="support-point-icons5" v-bind="{left: 'pair13Left', right: 'pair13Right', bid: bid}" />

        <h2 class="support-point-base">追加支持点</h2>
        <input class="support-point-base-1 support-point-common" :value="inputs.supportPointAdd2_1" @input="updateInput" inputfield="supportPointAdd2_1">
        <input class="support-point-base-2 support-point-common" :value="inputs.supportPointAdd2_2" @input="updateInput" inputfield="supportPointAdd2_2">
        <input class="support-point-base-3 support-point-common" :value="inputs.supportPointAdd2_3" @input="updateInput" inputfield="supportPointAdd2_3">
        <input class="support-point-base-4 support-point-common" :value="inputs.supportPointAdd2_4" @input="updateInput" inputfield="supportPointAdd2_4">
        <input class="support-point-base-5 support-point-common" :value="inputs.supportPointAdd2_5" @input="updateInput" inputfield="supportPointAdd2_5">

      </div>
    </transition>

  </div>

</template>

<script>
import SupportPairIcons from '~/components/points/SupportPairIcons.vue';
import { mapMutations, mapGetters, mapActions } from 'vuex';
import firebase from '~/plugins/firebase';

export default {
  name: 'support-pair-side',
  components: {
    SupportPairIcons
  },

  props: {
    bid: String,
    backLink: String
  },

  computed: {
    ...mapGetters({
      inputs: 'points/inputs',
      selectedGirlInduces: 'points/selectedGirlInduces',
      registeredGirls: 'registeredGirls'
    })
  },

  methods: {
    updateInput: function(e) {
      this.$store.dispatch('points/updateInputPermanent', {
        event: e,
        bid: this.bid
      });
    },

    onClickBase: function(e) {
      if (this.showIndex === 1) {
        this.basePointsEnter = 'animated slideInLeft faster';
        this.add1PointsLeave = 'animated slideOutRight faster';
      } else if (this.showIndex === 2) {
        this.basePointsEnter = 'animated slideInRight faster';
        this.add2PointsLeave = 'animated slideOutLeft faster';
      }

      this.showIndex = 0;
    },

    onClickAdd1: function(e) {
      if (this.showIndex === 0) {
        this.add1PointsEnter = 'animated slideInRight faster';
        this.basePointsLeave = 'animated slideOutLeft faster';
      } else if (this.showIndex === 2) {
        this.add1PointsEnter = 'animated slideInLeft faster';
        this.add2PointsLeave = 'animated slideOutRight faster';
      }

      this.showIndex = 1;
    },

    onClickAdd2: function(e) {
      if (this.showIndex === 0) {
        this.add2PointsEnter = 'animated slideInLeft faster';
        this.basePointsLeave = 'animated slideOutRight faster';
      } else if (this.showIndex === 1) {
        this.add2PointsEnter = 'animated slideInRight faster';
        this.add1PointsLeave = 'animated slideOutLeft faster';
      }

      this.showIndex = 2;
    }
  },

  data: () => {
    return {
      showIndex: 0,
      basePointsEnter: 'animated slideInLeft faster',
      basePointsLeave: 'animated slideOutRight faster',
      add1PointsEnter: 'animated slideInLeft faster',
      add1PointsLeave: 'animated slideOutRight faster',
      add2PointsEnter: 'animated slideInLeft faster',
      add2PointsLeave: 'animated slideOutRight faster'
    };
  },

  mounted: function(context) {
    let me = this;
    firebase.auth().onAuthStateChanged(function(user) {
      me.$store.dispatch('points/fetchInputs', me.bid);
    });
  }
};
</script>

<style>
.support-side-wrapper {
  display: flex;
}

.support-pair-wrapper {
  background-color: #f7f4e5;
  height: 100vh;
  width: 100%;
}

.support-pair-base-wrapper {
  display: grid;
  columns: (40vh, 40vh, 20vh);
  grid-row: auto;
  position: absolute;
  left: 0;
  right: 0;
  background-color: #f7f4e5;
}

.support-point-title {
  grid-row: 1;
  grid-column: 1;
  background-color: #efb2cf;
  color: white;
}

.support-point-base {
  grid-row: 1;
  grid-column: 2;
  background-color: #adcab0;
  color: white;
}

.support-point-icons1 {
  grid-row: 2;
  grid-column: 1;
}

.support-point-icons2 {
  grid-row: 3;
  grid-column: 1;
}
.support-point-icons3 {
  grid-row: 4;
  grid-column: 1;
}
.support-point-icons4 {
  grid-row: 5;
  grid-column: 1;
}
.support-point-icons5 {
  grid-row: 6;
  grid-column: 1;
}

.support-point-sum {
  grid-row: 1;
  grid-column: 5;
  background-color: cadetblue;
}

.support-pair-icons {
  grid-column: 1;
  grid-row: auto;
  padding: 10px;
  align-self: center;
}

.support-point-common {
  background-color: white;
  text-align: center;
  text-shadow: 1px;
  font-size: 32px;
  max-width: 50px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #4d484a;
  margin-top: 5px;
}

.support-point-base-1 {
  grid-column: 2;
  grid-row: 2;
}

.support-point-base-2 {
  grid-column: 2;
  grid-row: 3;
}

.support-point-base-3 {
  grid-column: 2;
  grid-row: 4;
}

.support-point-base-4 {
  grid-column: 2;
  grid-row: 5;
}

.support-point-base-5 {
  grid-column: 2;
  grid-row: 6;
}

.support-point-base-6 {
  grid-column: 2;
  grid-row: 7;
}

.support-point-base-7 {
  grid-column: 2;
  grid-row: 8;
}

.support-point-base-8 {
  grid-column: 2;
  grid-row: 9;
}

.support-point-base-9 {
  grid-column: 2;
  grid-row: 10;
}
</style>