<template>
  <h3>Tous les Widjets</h3>
  {{widgets.length}} widget{{widgets.length > 1 ? 's' : ''}}
  <ul>
    <li v-for="widg in widgets" :key="widg.id">
      <button @click="editwidget(widg)">modif</button>
      <button @click="deletewidget(widg)">suppr</button>
      <span v-if="widgetToEdit !== null && widgetToEdit.id === widg.id">
        <input type="text" v-model="widgetToEdit.widget" @keypress.enter="save" />
        <button @click="save">sauvegarder</button>
      </span>
      <span v-else>{{widg.widget}}</span>
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";
export default {
  emits: ["delete-widget", "edit-widget"],
  setup(props, { emit }) {
    let widgetToEdit = ref(null);
    let deletewidget = function (widg) {
      emit("delete-widget", widg);
    };

    let editwidget = function (widg) {
      widgetToEdit.value = widg;
      console.log("widgetList | widgetToEdit()", widgetToEdit);
    };

    let save = function () {
      emit("edit-widget", widgetToEdit.value);
      widgetToEdit.value = null;
    };

    return {
      deletewidget,
      widgetToEdit,
      editwidget,
      save,
    };
  },
  props: {
    widgets: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
ul {
  text-align: left;
  width: 50%;
  margin-left: 100px;
}
</style>