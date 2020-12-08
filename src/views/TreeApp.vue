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

export default {
  components: { 
    'tree-item': () => import(/* webpackChunkName: "FolderTemplate" */ "@/components/FolderTemplate") 
  },
  data() {
    return {
      treeData: json,
      // treeData: {
      //   name: "My Tree",
      //   children: [
      //     { name: "hello" },
      //     { name: "wat" },
      //     {
      //       name: "child folder",
      //       children: [
      //         {
      //           name: "child folder",
      //           children: [{ name: "hello" }, { name: "wat" }]
      //         },
      //         { name: "hello" },
      //         { name: "wat" },
      //         {
      //           name: "child folder",
      //           children: [{ name: "hello" }, { name: "wat" }]
      //         }
      //       ]
      //     }
      //   ]
      // }
    }
  },
  methods: {
    makeFolder: function(item) {
      this.$set(item, "children", []);
      this.addItem(item);
    },
    addItem: function(item) {
      item.children.push({
        name: "new stuff"
      });
    }
  },
  created(){
    if (Array.isArray(this.treeData)) {
      this.treeData = this.treeData[0]
    } 
  }
}
</script>

<style lang="sass">
.test 
    background-color: red
</style>