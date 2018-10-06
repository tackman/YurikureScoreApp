<template>
  <section class="container">

    <div class="support-side-wrapper">
      <support-pair-side v-bind:bid="'placeholder'" v-bind:backLink="'/'" />
    </div>

    <div v-show="!showControlPoints" class="control-side-wrapper show-control-button" v-on:click="showControlPoints = !showControlPoints">コントロール点を表示</div>
    <div class="control-side-wrapper" v-on:click="showControlPoints = !showControlPoints">
      <transition name="transition-control" enter-active-class="animated slideInUp faster" leave-active-class="animated slideOutDown faster">
        <control-points-side v-show="showControlPoints" />
      </transition>
    </div>

  </section>
</template>

<script>
import SupportPairSide from '~/components/points/SupportPairSide.vue';
import ControlPointsSide from '~/components/points/ControlPointsSide.vue';

export default {
  layout: 'points',
  components: {
    SupportPairSide,
    ControlPointsSide
  },

  data: () => {
    return { showControlPoints: false };
  }
};
</script>
