<template>
  <div>
    {{ get }}
    <input type="text" placeholder="Test Name" v-model="test.name">
    <button @click="addNew()">
      <span v-if="isBeingAdded">Cancel</span>
      <span v-else>Add Question</span>
    </button>

    <div v-if="isBeingAdded">
      <input type="text" placeholder="Question Name" v-model="newQuestion.name">
      <input type="text" placeholder="Option One" v-model="newQuestion.values.a">
      <input type="text" placeholder="Option Two" v-model="newQuestion.values.b">
      <input type="text" placeholder="Option Three" v-model="newQuestion.values.c">
      <input type="text" placeholder="Option Four" v-model="newQuestion.values.d">
      <button @click="submitQuestion()">Submit</button>
    </div>

    <div class="card card-body bg-light" v-for="question of test.questions" v-bind:key="question['.key']">
      <div v-if="!question.edit">
        <span name="name" placeholder="Name of question">{{question.name}}</span>
        <div v-for="value of question.values" v-bind:key="value['.key']">
          <input type="radio" :id="value" :value="value" v-model="question.picked">
          <label :for="value">{{ value }}</label>
        </div>
        {{ question.picked }}
        <button @click="setEditQuestion(question['.key'])">Edit</button>
        <button @click="removeQuestion(question['.key'])">Delete</button>
      </div>
      <div v-else>
        <input type="text" placeholder="Question Name" v-model="question.name">
        <input type="text" placeholder="Option One" v-model="question.values.a">
        <input type="text" placeholder="Option Two" v-model="question.values.b">
        <input type="text" placeholder="Option Three" v-model="question.values.c">
        <input type="text" placeholder="Option Four" v-model="question.values.d">
        <button @click="saveEdit(question)">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { questionsRef, testRef, db } from "../firebase.js";
import toast from "izitoast";

export default {
  data() {
    return {
      testId: this.$route.params.id,
      test: {
        name: "",
        questions: []
      },
      isBeingAdded: false,
      questions: [],
      newQuestion: {
        name: "",
        values: [],
        edit: false
      }
    };
  },
  computed: {
    get() {
      return this.$route.params.id;
    }
  },
  methods: {
    addNew() {
      this.isBeingAdded = !this.isBeingAdded;
    },
    submitQuestion() {
      if (!this.isQuestionCorrect()) {
        console.log("incorrect");
        return;
      }
      this.isBeingAdded = false;
      db.ref("tests/" + this.testId + "/questions").push(this.newQuestion);
      this.newQuestion = {
        name: "",
        values: [],
        edit: false
      };
      this.makeToast();
    },
    removeQuestion(key) {
      questionsRef.child(key).remove();
      this.makeToast();
    },
    setEditQuestion(key) {
      questionsRef.child(key).update({ edit: true });
    },
    saveEdit(question) {
      const key = question[".key"];
      questionsRef
        .child(key)
        .set({ name: question.name, values: question.values, edit: false });
    },
    isQuestionCorrect() {
      let q = this.newQuestion;
      if (
        q.name.trim() === "" ||
        Object.keys(q.values).length !== 4 ||
        Object.keys(q.values)
          .map(x => q.values[x])
          .some(x => x.trim() === "")
      )
        return false;
      return true;
    },
    makeToast() {
      toast.success({
        message: "Success",
        timeout: 1000
      });
    }
  },
  mounted() {
    testRef.child(this.$route.params.id).on("value", snap => {
      this.test = snap.val();
    });
    console.log(this.test);
  }
};
</script>

<style>

</style>
