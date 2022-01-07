<template>
  <!-- <form @submit.prevent="addwidget"> -->
  <form @submit.prevent="createWidget">
    <h3>Widget</h3>
    <label for="widget">widget</label>

    <br />
    <input type="text" placeholder="Nom du widget" v-model="name" />
    <br />
    <textarea cols="30" placeholder="Code" v-model="code"></textarea>
    <select v-model="categorie">
      <option v-for="categ in categories" :value="categ.value" :key="categ.id">
        {{ categ.name }}
      </option></select
    ><br />
    <button type="submit">ajouter</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Form",
  emits: ["createwidget"],
  setup(props, context) {
    const name = ref("");
    const code = ref("");
    const categories = ref([
      {
        id: 1,
        name: "Météo",
        value: "weather",
      },
      {
        id: 2,
        name: "Plan",
        value: "map",
      },
      {
        id: 3,
        name: "Autre",
        value: "auther",
      },
    ]);
    const categorie = ref("");

    function createWidget() {
      const widget = {
        id: Date.now(),
        name: name.value,
        code: code.value,
        categorie: categorie.value,
      };
      console.log("widget", widget);
      context.emit("createwidget", widget);
      resetForm();
    }

    function resetForm() {
      name.value = "";
      code.value = "";
      categorie.value = "";
    }

    return {
      name,
      code,
      categories,
      categorie,
      createWidget,
    };
  },
};
</script>
<style scoped>
@media screen and (max-width: 700px) {
  input,
  textarea,
  select,
  button {
    width: 80%;
    margin: 5px;
  }
}

@media screen and (min-width: 701px) {
  input,
  textarea,
  select,
  button {
    width: 60%;
    margin: 5px;
  }
}
</style>