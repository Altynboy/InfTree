<template>
    <li v-if="!isDeleted">
        <span @click="deleteFolder">[{{'delete'}}]</span>
        <div
          :class="{bold: isFolder}"
          @click="toggle"
          @dblclick="makeFolder">
          {{ item.name  + "  | " + item.count}}
          <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
        </div>
        <ul v-show="isOpen" v-if="isFolder">
          <tree-item
            class="item"
            v-for="(child, index) in item.children"
            :key="index"
            :item="child"
            @make-folder="$emit('make-folder', $event)"
            @add-item="$emit('add-item', $event)"
            @delete-folder="$store.dispatch('trackPathIndex', index );
                            $store.dispatch('trackPath', item.name);
                            $emit('delete-folder', $event)"
          ></tree-item>
          <li class="add" @click="$emit('add-item', item)">+</li>
        </ul>
    </li>
</template>

<script>
export default {
    name: "tree-item",
    props: {
        item: Object,
    },
    data: function() {
        return {
            isOpen: false,
            isDeleted: false
        };
    },
    computed: {
        isFolder: function() {
            return this.item.children && this.item.children.length;
        }
    },
    methods: {
        toggle: function() {
            if (this.isFolder) {
                this.isOpen = !this.isOpen;
            }
        },
        makeFolder: function() {
            if (!this.isFolder) {
                this.$emit("make-folder", this.item);
                this.isOpen = true;
            }
        },
        deleteFolder: function() {
            this.$store.dispatch('newPath')
            this.$emit("delete-folder", this.item);
            this.isDeleted = true
        }
    },
    created() {
        // console.log(this.item.name)
    }
}
</script>

<style>

</style>