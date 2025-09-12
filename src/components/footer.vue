<script setup lang="ts">
import { onMounted, ref } from 'vue'
const api_url = '/quotes/quotes'

const quoteArray = ref([])

onMounted(async () => {
  try {
    const response = await fetch(api_url)
    quoteArray.value = await response.json()
    PrintQuote()
  } catch (error) {
    console.error('Failed to fetch quotes:', error)
  }
})

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

let quote = ref("");
let author = ref("");

function PrintQuote(){
  const rnd = getRandomInt(50);
  quote.value = retrieveQuote(rnd);
  author.value = retrieveQuoteAuthor(rnd);
}
function retrieveQuote(index: number){
  if (quoteArray.value && quoteArray.value.length > 0) {
    //return quoteArray.value[index].q
  }
  return 'Loading...'
}
function retrieveQuoteAuthor(index: number){
  if (quoteArray.value && quoteArray.value.length > 0) {
    //return quoteArray.value[index].a
  }
  return 'Loading...'
}
</script>

<template>
  <footer>
    <div class="displayQuotes" @click="PrintQuote()">
      <div class="quoteString">
        <h3>"</h3>
        <h4 class="quoteStringDisplay">{{quote}}</h4>
        <h3>"</h3>
      </div>
      <h4>–</h4>
      <h4>{{author}}</h4>
    </div>
    <p class="unselectable">Website made by Benji</p>
  </footer>
</template>

<style scoped>
.displayQuotes {
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.4em;
  border-bottom: 2px gray solid;
  cursor: pointer;
}
.quoteString{
  display: flex;
}
.displayQuotes h3, h4{
  margin: 0;
  padding: 0;
}

.quoteString h4 {
  font-style: italic;
}
</style>
