<template>
  <div class="control-girl-icon">
    <img class="girl-icon" v-bind:src="icon" />
    <div class="control-girl-point">{{point}}</div>
  </div>
</template>

<script>
export default {
  name: 'control-girl-icon',
  props: {
    icon: {
      type: String,
      default: '/app/images/girls/red.png'
    },

    point: {
      type: Number,
      default: 0
    }
  },

  data: () => {
    return {};
  }
};
</script>

<style>
.control-girl-icon {
  padding: 0px;
  align-self: center;
  position: relative;
  width: 40px;
  height: 40px;
}

.control-side-wrapper {
  position: absolute;
  bottom: 0;
}

.control-girl-point {
  font-size: 22px;
  z-index: 1;
  position: absolute;
  top: 35px;
  left: 40px;
  height: 30px;
  width: 30px;
  background-color: #f069a5aa;
  color: white;
  border-radius: 5px;
}
</style>