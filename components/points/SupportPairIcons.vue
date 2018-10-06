<template>
  <div>
    <img class="girl-icon" v-bind:src="registeredGirls[selectedGirlInduces[left]].icon" v-on:click="clickLeft" />
    <img class="girl-icon" v-bind:src="registeredGirls[selectedGirlInduces[right]].icon" v-on:click="clickRight" />

    <transition name="chooser-transition" enter-active-class="animated flipInX faster" leave-active-class="animated flipOutX faster">
      <div class="girl-chooser" v-show="showChooserLeft">
        <div class="chooser-wrapper">
          <img class="girl-icon chooser-button-1" v-bind:src="registeredGirls[1].icon" v-on:click="onGirlChosen({index: 1, objective: left})" />
          <img class="girl-icon chooser-button-2" v-bind:src="registeredGirls[2].icon" v-on:click="onGirlChosen({index: 2, objective: left})" />
          <img class="girl-icon chooser-button-3" v-bind:src="registeredGirls[3].icon" v-on:click="onGirlChosen({index: 3, objective: left})" />
          <img class="girl-icon chooser-button-4" v-bind:src="registeredGirls[4].icon" v-on:click="onGirlChosen({index: 4, objective: left})" />
          <img class="girl-icon chooser-button-5" v-bind:src="registeredGirls[5].icon" v-on:click="onGirlChosen({index: 5, objective: left})" />
          <img class="girl-icon chooser-button-6" v-bind:src="registeredGirls[6].icon" v-on:click="onGirlChosen({index: 6, objective: left})" />
          <img class="girl-icon chooser-button-7" v-bind:src="registeredGirls[7].icon" v-on:click="onGirlChosen({index: 7, objective: left})" />
          <img class="girl-icon chooser-button-8" v-bind:src="registeredGirls[8].icon" v-on:click="onGirlChosen({index: 8, objective: left})" />
          <img class="girl-icon chooser-button-9" v-bind:src="registeredGirls[9].icon" v-on:click="onGirlChosen({index: 9, objective: left})" />
          <img class="girl-icon chooser-button-10" v-bind:src="registeredGirls[0].icon" v-on:click="onGirlChosen({index: 0, objective: left})" />
        </div>
      </div>
    </transition>

    <transition name="chooser-transition" enter-active-class="animated flipInX faster" leave-active-class="animated flipOutX faster">
      <div class="girl-chooser" v-show="showChooserRight">
        <div class="chooser-wrapper">
          <img class="girl-icon chooser-button-1" v-bind:src="registeredGirls[1].icon" v-on:click="onGirlChosen({index: 1, objective: right})" />
          <img class="girl-icon chooser-button-2" v-bind:src="registeredGirls[2].icon" v-on:click="onGirlChosen({index: 2, objective: right})" />
          <img class="girl-icon chooser-button-3" v-bind:src="registeredGirls[3].icon" v-on:click="onGirlChosen({index: 3, objective: right})" />
          <img class="girl-icon chooser-button-4" v-bind:src="registeredGirls[4].icon" v-on:click="onGirlChosen({index: 4, objective: right})" />
          <img class="girl-icon chooser-button-5" v-bind:src="registeredGirls[5].icon" v-on:click="onGirlChosen({index: 5, objective: right})" />
          <img class="girl-icon chooser-button-6" v-bind:src="registeredGirls[6].icon" v-on:click="onGirlChosen({index: 6, objective: right})" />
          <img class="girl-icon chooser-button-7" v-bind:src="registeredGirls[7].icon" v-on:click="onGirlChosen({index: 7, objective: right})" />
          <img class="girl-icon chooser-button-8" v-bind:src="registeredGirls[8].icon" v-on:click="onGirlChosen({index: 8, objective: right})" />
          <img class="girl-icon chooser-button-9" v-bind:src="registeredGirls[9].icon" v-on:click="onGirlChosen({index: 9, objective: right})" />
          <img class="girl-icon chooser-button-10" v-bind:src="registeredGirls[0].icon" v-on:click="onGirlChosen({index: 0, objective: right})" />
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  name: 'support-pair-icons',
  props: ['left', 'right', 'bid'],

  computed: {
    ...mapGetters({
      registeredGirls: 'registeredGirls',
      selectedGirlInduces: 'points/selectedGirlInduces'
    })
  },

  methods: {
    clickRight(message, event) {
      this.showChooserRight =
        this.showChooserRight || this.showChooserLeft ? false : true;
    },

    clickLeft(message, event) {
      this.showChooserLeft =
        this.showChooserLeft || this.showChooserRight ? false : true;
    },

    onGirlChosen(message) {
      this.showChooserLeft = false;
      this.showChooserRight = false;

      this.updateSelectedGirl({
        objective: message.objective,
        newIndex: message.index,
        bid: this.bid
      });
    },

    ...mapActions({
      updateSelectedGirl: 'points/updateSelectedGirlPermanent'
    })
  },

  data: () => {
    return {
      showChooserLeft: false,
      showChooserRight: false
    };
  }
};
</script>