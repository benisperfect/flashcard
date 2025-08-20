<script setup lang="ts">
import { useRoute } from "vue-router";
import { ChevronLeft, ChevronRight, RefreshCcw } from "lucide-vue-next";

const isFlipped = ref(false);
const countID = ref(0);

const route = useRoute();
const diffid = route.params.diffId;
const diffData = getFlashcardsByDifficulty(diffid);

const increment = () => {
  if (countID.value < diffData.length - 1) {
    countID.value++;
    isFlipped.value = false; // Reset to front when changing card
  }
};

const decrement = () => {
  if (countID.value > 0) {
    countID.value--;
    isFlipped.value = false; // Reset to front when changing card
  }
};

// Get current flashcard
const currentFlashcard = computed(() => diffData[countID.value]);
</script>

<template>
  <div class="flex justify-center items-center relative top-40">
    <!-- flip container -->
    <div
      class="card_container"
      :style="{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }"
    >
      <!-- Front -->
      <div class="card_face card_front">
        <RefreshCcw
          @click="isFlipped = !isFlipped"
          class="w-5 h-5 rotate_animation self-start m-5"
        />
        <div class="flex flex-col justify-center items-center flex-1">
          <p class="font-extrabold text-5xl">
            {{ currentFlashcard?.front }}
          </p>
          <p class="font-medium text-center text-5xl">
            ex: {{ currentFlashcard?.example }}
          </p>
        </div>
        <div class="p-5 flex flex-row justify-center items-end">
          <ChevronLeft @click="decrement()" class="chevron" />
          <ChevronRight @click="increment()" class="chevron" />
        </div>
      </div>

      <!-- Back -->
      <div class="card_face card_back">
        <RefreshCcw
          @click="isFlipped = !isFlipped"
          class="w-5 h-5 rotate_animation self-start m-5"
        />
        <div class="flex flex-col justify-center items-center flex-1">
          <p class="font-extrabold text-5xl">
            {{ currentFlashcard?.back }}
          </p>
        </div>
        <div class="p-5 flex flex-row justify-center items-end">
          <ChevronLeft @click="decrement()" class="chevron" />
          <ChevronRight @click="increment()" class="chevron" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card_container {
  width: 900px;
  height: 500px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  border: 1px solid #eee;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
}

.card_face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
}

.card_front {
  transform: rotateY(0deg);
}

.card_back {
  transform: rotateY(180deg);
}

.rotate_animation {
  transition: transform 0.6s;
}

.chevron:hover {
  background-color: rgba(159, 161, 164, 0.2);
  border-radius: 30px;
}
</style>
