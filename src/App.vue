<template>
  <div id="app"> 
    <Counter />
  </div>
</template>

<script>
import Counter from "./components/Counter";

export default {
  name: "app",
  components: {
    Counter
  },
  data: function() {
    return {
      num: 0,
      message: []
    };
  },
  methods: {
    updateNum: function(data) {
      this.count[data.index - 1] = data.value;
    }
  }
};
</script>

<style>
</style>
