<template>
  <div>
    <p>count:{{ getCounter }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { counterModule } from "@/store/modules/counter";

export default class Counter extends Vue {
  get getCounter() {
    return counterModule.counter;
  }

  increment() {
    counterModule.increment(1);
  }

  decrement() {
    counterModule.decrement(1);
  }
  // mouted() {
  //   console.log('mouted');
  // }
}
</script>
