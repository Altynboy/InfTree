<template>
  <div>
    <ul id="demo">
      <tree-item
        class="item"
        :item="treeData"
        @make-folder="makeFolder"
        @add-item="addItem"
        @delete-folder="deleteItem"
      ></tree-item>
    </ul>
  </div>
</template>

<script>
import json from "@/divisions.json"
import { mapGetters} from 'vuex';

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
    // ...mapActions(["fetchTrees"]),
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
    },
    deleteItem: function(item) {
      console.log(item.name)
      delete item[name]
      // console.log(this.deletePath)
      // console.log(this.deletePathIndex)
      var array = this.treeData
      console.log(array)
      for (let index = this.deletePath.length; index >= 0; index--) {
        if (array.name == this.deletePath[index]){
          console.log(this.deletePathIndex[index])
          array = array.children[this.deletePathIndex[index]]
          console.log(array)
        }
      }
      this.treeData
    },
    // deleteJsonRecursively( arr ) {
    //   for( var i = 0; i < arr.length; i ++ ) {
    //       var item = arr[i];
    //       if( item.name == this.deletePath[index] ) {
    //         arr.splice(i,1); // remove here
    //         i --; // arr.length changed after arr.splice 
    //       } else if( item.children !== undefined) {
    //         deleteJsonRecursively(item.Child);
    //       }
    //   }
    // },
    // isNotEmpty(object) {
    //   if (Array.isArray(object.parameters)) {
    //       object.parameters = object.parameters.filter(isNotEmpty);
    //       return object.parameters.length;
    //   }
    //   return true;
    // }
  },
  computed: mapGetters(["allTree", "deletePath", "deletePathIndex"]),
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