<template>
  <div class="control-girls">
    <h1></h1>
    <control-girl-icon class="control-girl-1" v-bind:icon="registeredGirls[1].icon" v-bind:point="controlPoints[1]" />
    <control-girl-icon class="control-girl-2" v-bind:icon="registeredGirls[2].icon" v-bind:point="controlPoints[2]" />
    <control-girl-icon class="control-girl-3" v-bind:icon="registeredGirls[3].icon" v-bind:point="controlPoints[3]" />
    <control-girl-icon class="control-girl-4" v-bind:icon="registeredGirls[4].icon" v-bind:point="controlPoints[4]" />
    <control-girl-icon class="control-girl-5" v-bind:icon="registeredGirls[5].icon" v-bind:point="controlPoints[5]" />
    <control-girl-icon class="control-girl-6" v-bind:icon="registeredGirls[6].icon" v-bind:point="controlPoints[6]" />
    <control-girl-icon class="control-girl-7" v-bind:icon="registeredGirls[7].icon" v-bind:point="controlPoints[7]" />
    <control-girl-icon class="control-girl-8" v-bind:icon="registeredGirls[8].icon" v-bind:point="controlPoints[8]" />
    <control-girl-icon class="control-girl-9" v-bind:icon="registeredGirls[9].icon" v-bind:point="controlPoints[9]" />
  </div>
</template>

<script>
import ControlGirlIcon from '~/components/points/ControlGirlIcon.vue';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'control-points-side',
  components: {
    ControlGirlIcon
  },

  computed: {
    ...mapGetters({
      controlPoints: 'points/controlPoints',
      registeredGirls: 'registeredGirls'
    })
  }
};
</script>


<style>
.control-girls {
  background-color: #ccd7ea;
  grid-template-columns: repeat(5, 20vw);
  grid-template-rows: repeat(2, 13vh);
  display: grid;
  grid-gap: 0px;
  height: 30vh;
}

.control-girl-1 {
  grid-column: 1;
  grid-row: 1;
}
.control-girl-2 {
  grid-column: 2;
  grid-row: 1;
}
.control-girl-3 {
  grid-column: 3;
  grid-row: 1;
}
.control-girl-4 {
  grid-column: 4;
  grid-row: 1;
}
.control-girl-5 {
  grid-column: 5;
  grid-row: 1;
}
.control-girl-6 {
  grid-column: 1;
  grid-row: 2;
}
.control-girl-7 {
  grid-column: 2;
  grid-row: 2;
}
.control-girl-8 {
  grid-column: 3;
  grid-row: 2;
}

.control-girl-9 {
  grid-column: 4;
  grid-row: 2;
}
</style>