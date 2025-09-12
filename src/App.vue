<script setup lang="ts">
import Header from '@/components/header.vue';
import Content from '@/components/content.vue';
import Footer from '@/components/footer.vue';
</script>

<template>
  <div class="display">
    <Header></Header>
    <Content class="content" />
    <Footer />
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