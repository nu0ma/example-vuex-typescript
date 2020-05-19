<template>
  <div>count:{{ getCounter }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { counterModule } from '@/store/counter';

export default class Counter extends Vue {
  get getCounter() {
    return counterModule.counter;
  }
  // mouted() {
  //   console.log('mouted');
  // }
}
</script>
