<script setup lang="ts">
import {ref, computed} from "vue";

 let Celsius = ref(0);

  const Fahrenheit = computed(() => {
    return roundDecimals((Celsius.value * 9/5) + 32);
  })
  const Kelvin = computed(() => {
    return roundDecimals(Celsius.value + 273.15);
  })

 function change(tempChangeFactor: number){
   Celsius.value = roundDecimals(Celsius.value  += tempChangeFactor);
 }

function initValues(){
   Celsius.value = getRandomTemp(25,-5)
 }
function getRandomTemp(max, min){
   return Math.floor(Math.random() * (max - min + 1)) + min
 }
function roundDecimals(number){
  return Math.floor((number *= 100)) / 100;
}
 initValues();
</script>

<template>
  <h1>Wetterstation</h1>
  <div id="displayInfoDiv">
    <div class="tempInfo">
      <p>Temperatur in Celcsius</p>
      <p>{{Celsius}}</p>
    </div>
    <div class="tempInfo">
      <p>Temperatur in Fahrenheit</p>
      <p>{{Fahrenheit}}</p>
    </div>
    <div class="tempInfo">
      <p>Temperatur in Kelvin</p>
      <p>{{Kelvin}}</p>
    </div>
    <div class="tempInfo">
      <p>Gefrierpunkt unterschritten</p>
      <p v-if="Celsius < 0">Ja</p>
      <p v-else>Nein</p>
    </div>
  </div>

  <div class="buttons">
    <button @click="change(-1)">Es wird kälter</button>
    <button @click="change(1)">Es wird wärmer</button>
  </div>
  <br>
  <hr>
</template>

<style>
.displayInfoDiv{
  border: 4px gray solid;
  background-color: #222327;
  width: fit-content;
  margin: 0 auto;
  border-radius: 15px;
  padding: 0px 25px;
}
  hr{
    width: 80%;
    border: 2px solid gray;
  }
  h1,p, .buttons button,input,h3{
    font-family: "Roboto", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-variation-settings:
        "wdth" 100;
  }
</style>
<style scoped>
#displayInfoDiv{
  padding: 0px 25px;
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  border: 4px gray solid;
  border-radius: 15px;
  margin: 0 auto;
  margin-bottom: 1%;
  background-color: #222327;
}
.tempInfo{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.buttons button{
  margin-left: 5px;
  margin-right: 5px;
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 12px 24px;
  border: 0;
  color: #ffffff;
  background: #242728;
  line-height: 1.15;
  font-size: 16px;
}
.buttons button:hover{
  transition: all .1s ease;
  box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
}
</style>
