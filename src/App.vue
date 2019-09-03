<template>
  <div id="app"> 
    <TotoList />
  </div>
</template>

<script>
import TotoList from "./components/TotoList";

export default {
  name: "app",
  components: {
    TotoList
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
