<template>
  <div>
    <ul id="demo">
      <tree-item
        class="item"
        :item="treeData"
        @make-folder="makeFolder"
        @add-item="addItem"
      ></tree-item>
    </ul>
  </div>
</template>

<script>
import json from "@/divisions.json"
import { mapGetters, mapActions } from 'vuex';

export default {
  components: { 
    'tree-item': () => import(/* webpackChunkName: "FolderTemplate" */ "@/components/FolderTemplate") 
  },
  data() {
    return {
      treeData: json
    }
  },
  methods: {
    ...mapActions(["fetchTrees"]),
    makeFolder: function(item) {
      this.$set(item, "children", []);
      this.addItem(item);
    },
    addItem: function(item) {
      console.log(item)
      item.children.push({
        name: "new stuff",
        count: 0
      });
    }
    // deleteItem: function(item) {
    //   delete item[name]
    // }
  },
  computed: mapGetters(["allTodos"]),
  created(){
    if (Array.isArray(this.treeData)) {
      this.treeData = {
        name: "Root",
        count: this.treeData.length,
        children: this.treeData
      }
    } 
  }
}
</script>

<style lang="sass">
.test 
    background-color: red
</style>