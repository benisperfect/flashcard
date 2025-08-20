<script setup lang="ts">
import { Button } from "../components/ui/button";
import { ChartBarStacked, Flame, House } from "lucide-vue-next";
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="navbar">
    <div class="h-[60px] mr-5 flex flex-row gap-10 justify-end items-center">
      <div class="flex flex-row justify-start gap-2 w-screen ml-5 text-[45px]">
        <Icon
          class="mt-1 transition-transform duration-200 hover:scale-110"
          icon="arcticons:flashcards"
          width="60"
          height="60"
          style="color: white"
        />
        <h1 class="text-white">Flashcard App</h1>
      </div>
      <Button
        class="bg-white text-black font-sans hover:translate-y-[-5px] hover:bg-gray-300"
        ><NuxtLink to="/categories"><ChartBarStacked /></NuxtLink
      ></Button>
      <Button
        class="bg-white text-black font-sans hover:translate-y-[-5px] hover:bg-gray-300"
        ><NuxtLink to="/difficulties"><Flame /></NuxtLink
      ></Button>
      <Button
        class="bg-white text-black font-sans hover:scale-120 hover:bg-gray-300"
        ><NuxtLink to="/"><House /></NuxtLink
      ></Button>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Akaya+Kanadaka&family=Fascinate&family=Quicksand:wght@300..700&display=swap");
.navbar {
  height: 60px;
  background: rgb(0, 0, 0);
}

h1 {
  font-family: "Akaya Kanadaka", cursive;
}
</style>
