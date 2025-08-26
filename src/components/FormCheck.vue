<script setup lang="ts">

  import {ref} from "vue";

  let emailInputString = ref("");
  let passwordInputString = ref("");

</script>

<template>
<h1>Is your Password secure?</h1>
  <div class="inputFields">
    <input v-model="emailInputString" placeholder="E-Mail">
    <input v-model="passwordInputString" placeholder="Password">
  </div>
  <div class="displayInfoDiv">
  <h3>Criteria:</h3>
  <p>Min. length of 12 characters</p>
  <p>Complexity:</p>
  <p>Uppercase letters</p>
  <p>Lowercase letters</p>
  <p>Numbers</p>
  <p>Special characters</p>
  <p>No common Passwords</p>
  <p>Not to many repeating characters in a row</p>
  </div>
</template>

<style scoped>
.inputFields{
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 0 auto;
}
input{
  text-align: center;
  margin-bottom: 5%;
  border:none;
  width: 100%;
  border-bottom: darkgray solid 1px;
  background: none;
  transition: transform 0.3s;
  transform-origin: center;
  color: white;
}
input::placeholder{
  text-align: center;
}
input:focus{
  outline: none;
  transform: scaleX(1.05);
}

</style>
