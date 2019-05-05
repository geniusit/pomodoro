<template>
  <div class="container" v-noise="'brown'">
    <h2>
      <span>{{ 'Pomodoro' | uppercase |addspace }}</span>
      <controls-component></controls-component>
    </h2>
    <state-title-component v-bind:isWorking="isWorking"></state-title-component>
    <count-down-component></count-down-component>
    <transition name="fade">
        <kittens-component v-show="!isWorking"></kittens-component>
    </transition>
  </div>
</template>

<script>
import ControlsComponent from "./ControlsComponent";
import CountDownComponent from "./CountDownComponent";
import KittensComponent from "./KittensComponent";
import StateTitleComponent from "./StateTitleComponent";
import store from '../vuex/store'
import { mapGetters } from 'vuex'


export default {
  components: {
    ControlsComponent,
    CountDownComponent,
    KittensComponent,
    StateTitleComponent
  },
  computed: mapGetters({
    isWorking: 'isWorking'
  }),
  store
};
</script>