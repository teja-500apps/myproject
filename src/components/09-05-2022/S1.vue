<template>
  <div>
    <b-card no-body>
       <p> the universities</p>
      <b-tabs card>
        <b-button v-b-toggle.my-sidebar>check the list</b-button>
     
        <b-tab v-for="i in tabs" :key="i" :title="'Form' + i">
          <b-button size="sm" variant="danger" class="left" @click="closeTab(i)">Close Tab</b-button>
          c
        </b-tab>
         <b-sidebar id="my-sidebar" title="Sidebar" shadow>
              <p>The given univerities list</p>
         </b-sidebar>
        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="newTab" href="#"><b>+</b></b-nav-item >
        </template>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "SaI",
  data() {
    return {
      tabs: [],
      tabCounter: 0,
      fields: ["userId", "id", "title", "completed"],
      res: " ",
    };
  },
  methods: {
    async newTab() {
      this.tabs.push(this.tabCounter++);
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      this.res = await response.json();
    },
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1);
        }
      }
    },
  },
};
</script>
