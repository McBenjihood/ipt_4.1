<script setup lang="ts">
</script>

<template>
  <div class="displayViewContent">
    <article class="blog-post box">
      <div class="post-header">
        <h2>Erste Änderungen an der Website mit CSS</h2>
        <div class="post-meta">
          <span>Benjamin Gerresheim,</span>
          <span>7.2.2025</span>
        </div>
      </div>

      <hr class="post-divider" />

      <div class="post-body">
        <p>
          Heute habe ich mich zum 1. mal der Entwicklung meiner Website gewidmet. Ich habe mich
          hauptsächlich der Gestaltung mit CSS beschäftigt.
        </p>
        <p>
          Dabei habe ich einen Titel erstellt und eine Leiste, von welcher man mit Knöpfen auf
          versch. Versionen der Website kommen kann. Am längsten gedauert, hat aber das Design der
          Artikel, auf der Hauptseite, wie den, den sie gerade Lesen.
        </p>
      </div>
    </article>

  </div>
</template>

<style scoped>
.blog-post.box {
  padding: 25px 35px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.post-header h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5em;
  font-weight: 500;
  margin: 0;
  flex-grow: 1;
}

.post-meta {
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  font-weight: 400;
  color: #ccc;
  white-space: nowrap;
}

.post-meta span:first-child {
  margin-right: 0.5em;
}

.post-divider {
  border: none;
  height: 1px;
  background-color: #1f1f64;
  margin: 20px 0;
}

.post-body p {
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  line-height: 1.6;
  margin: 0 0 1em 0;
  font-weight: 400;
}

.post-body p:last-child {
  margin-bottom: 0;
}
</style>
