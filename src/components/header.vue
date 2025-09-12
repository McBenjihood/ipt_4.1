<script setup lang="js">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header id="header_title">
    <h1 class="unselectable">Benjislab.dev</h1>
  </header>

  <div id="contentBar">

    <div class="routerNavWrapper">
      <div class="routerNav">
        <RouterLink
          to="/about"
          :class="{ 'about-header-class': $route.path === '/about' }"
          class="RouterLinkClass"
          ><p>About Me</p>
          <img src="../assets/img/icons/account_icon.svg" alt="Account Icon"
        /></RouterLink>
        <hr />
      </div>
      <div class="routerNav">
        <RouterLink
          to="/"
          :class="{ 'home-header-class': $route.path === '/' }"
          class="RouterLinkClass"
          ><p>Home</p>
          <img src="../assets/img/icons/home_icon.svg" alt="Home Icon"
        /></RouterLink>
        <hr />
      </div>
      <div class="routerNav">
        <RouterLink
          to="/projects"
          :class="{ 'project-header-class': $route.path === '/projects' }"
          class="RouterLinkClass"
          ><p>Projects</p>
          <img src="../assets/img/icons/code_block_icon.svg" alt="Projects Icon"
        /></RouterLink>
        <hr />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
