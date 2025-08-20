<script setup lang="ts">
import { Play } from "lucide-vue-next";
const categories = getAllCategories();

</script>

<template>
  <div class="w-100% h-100% flex flex-col items-center mt-30 mb-5">
    <div class="layout">
      <div
        v-for="category in categories"
        :key="category"
        class="button_container"
      >
        <p class="text-center">{{ category }}</p>
        <Button
          class="w-30 bg-white text-black hover:bg-gray-300"
        >
          <NuxtLink
            :to="`/category/${category}`"
          >
            <Play />
          </NuxtLink>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-rows: auto;
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
