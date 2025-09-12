<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="content">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}

.fade-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}
</style>
