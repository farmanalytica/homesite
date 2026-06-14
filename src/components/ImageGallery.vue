<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{ images: string[]; alt: string; interval?: number }>(),
  { interval: 3800 },
)

const i = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

function go(n: number): void {
  i.value = (n + props.images.length) % props.images.length
}
function next(): void {
  go(i.value + 1)
}

function start(): void {
  stop()
  if (props.images.length > 1) timer = setInterval(next, props.interval)
}
function stop(): void {
  if (timer) clearInterval(timer)
}

onMounted(start)
onUnmounted(stop)
</script>

<template>
  <div class="gallery" @mouseenter="stop" @mouseleave="start">
    <div class="g-track" :style="{ transform: `translateX(-${i * 100}%)` }">
      <img
        v-for="(src, n) in images"
        :key="src"
        :src="src"
        :alt="`${alt} — ${n + 1}`"
        loading="lazy"
      />
    </div>
    <div v-if="images.length > 1" class="g-dots">
      <button
        v-for="(src, n) in images"
        :key="src"
        class="g-dot"
        :class="{ active: n === i }"
        :aria-label="`${alt} ${n + 1}`"
        @click="go(n)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.g-track {
  display: flex;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.g-track img {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.g-dots {
  position: absolute;
  bottom: 0.7rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  z-index: 2;
}

.g-dot {
  width: 7px;
  height: 7px;
  border-radius: var(--r-full);
  border: none;
  background: rgba(255, 255, 255, 0.55);
  cursor: pointer;
  padding: 0;
  transition: all 0.2s;
}

.g-dot.active {
  background: var(--white);
  width: 20px;
}
</style>
