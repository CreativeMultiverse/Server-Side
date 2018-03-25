<template>
  <div>
    <div v-for="test of tests" v-bind:key="test['.key']">
      <div>{{ test.name }}</div>
      <router-link :to="getRoute(test['.key'])">Go to test No. {{ test['.key'] }}</router-link>
    </div>
    <input type="text" v-model="testName"> 
    <button @click="addTest()">Add Test</button>
  </div>
</template>

<script>
import { testRef } from "../firebase.js";

export default {
  data() {
    return {
      testName: ""
    };
  },
  firebase: {
    tests: testRef
  },
  methods: {
    addTest() {
      testRef.push({ name: this.testName, question: [] });
      this.testName = "";
    },
    getRoute(key) {
      return `/tests/${key}`;
    }
  }
};
</script>


<style>

</style>
