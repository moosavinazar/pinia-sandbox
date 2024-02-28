<template>
  <h2>Moosavi</h2>
<!--  <div>{{ count }}</div>-->
  <div>{{ store.count }} - {{ store.doubleCount(5) }} - {{ doubleCount }}</div>
  <button @click="store.increment">Increment</button>
  <button @click="increment">Increment-F</button>
  <button @click="store.increment2(3)">Increment-F2</button>
</template>

<script setup>
  import useCounterStore from "@/store/counter";
  import {computed} from "vue";
  // import {storeToRefs} from "pinia";
  // import counter from "@/store/counter";

  const store = useCounterStore();
  // const { count } = storeToRefs(store);
  // count.value++;

  // store.count++;
  //
  // store.$reset();

  // store.$patch({
  //   count: store.count + 1
  // })

  // const doubleCount = computed(() => store.doubleCount);
  const doubleCount = computed(() => store.doubleCount(3));

  function increment() {
    store.increment2(5);
  }

</script>
