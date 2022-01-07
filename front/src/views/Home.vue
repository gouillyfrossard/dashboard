<template>
  <div class="home">
    <HelloWorld msg="Dashboard widget" />
    <Form @createwidget="addWidget" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Form from "@/components/Form.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Form,
  },
  setup() {
    function addWidget(data) {
      console.log("Home.vue | addWidget()", data);
    }

    return { addWidget };
  },
};
</script>
