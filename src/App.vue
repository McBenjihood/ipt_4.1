<script setup lang="ts">
import importHeader from '/src/components/header.vue'
import importContent from '/src/components/content.vue'
import importFooter from '/src/components/footer.vue'
</script>

<template>
  <div class="display">
    <import-header />
    <import-content class="content" />
    <import-footer />
  </div>
</template>

<style scoped>
.display {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* This is the key addition */
}
.content {
  margin-top:0 ;
  flex-grow: 1;
}
</style>