<script setup>
import { Play } from "lucide-vue-next";

const difficulties = ["Easy", "Medium", "Hard"];
</script>

<template>
  <div class="w-100% h-100% flex flex-row justify-center items-center mt-30">
    <div class="layout w-screen">
      <div v-for="diff in difficulties" class="button_container">
        <p>{{ diff }}</p>
        <Button class="w-30 bg-white text-black hover:bg-gray-300"
          ><NuxtLink :to="`diff/${diff.toLocaleLowerCase()}`"><Play /></NuxtLink
        ></Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  grid-template-rows: 1;
  gap: 20px;
}

.button_container {
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  gap: 30px;
  background: black;
  color: white;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 8px 8px rgba(62, 59, 59, 0.5);
}

.button_container:hover {
  transform: translateY(-15px);
  transition: all 0.2s ease;
}
</style>
