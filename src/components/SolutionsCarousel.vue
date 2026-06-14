<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../i18n'
import { SITE } from '../data/site'
import { SOLUTIONS } from '../data/solutions'
import ImageGallery from './ImageGallery.vue'

const { t } = useI18n()
const index = ref(0)
const count = SOLUTIONS.length
let timer: ReturnType<typeof setInterval> | undefined

function go(i: number): void {
  index.value = (i + count) % count
}
function next(): void {
  go(index.value + 1)
}
function prev(): void {
  go(index.value - 1)
}

function start(): void {
  stop()
  timer = setInterval(next, 6000)
}
function stop(): void {
  if (timer) clearInterval(timer)
}

onMounted(start)
onUnmounted(stop)
</script>

<template>
  <div class="carousel" @mouseenter="stop" @mouseleave="start">
    <div class="track" :style="{ transform: `translateX(-${index * 100}%)` }">
      <div v-for="s in SOLUTIONS" :key="s.key" class="slide">
        <div class="slide-media">
          <ImageGallery :images="s.gallery" :alt="t(`solutions.${s.key}.name`)" />
        </div>
        <div class="slide-body">
          <span v-if="s.featured" class="badge">Recomendado</span>
          <p class="slide-audience">{{ t(`solutions.${s.key}.audience`) }}</p>
          <h3>{{ t(`solutions.${s.key}.name`) }}</h3>
          <p class="slide-price">
            {{ t(`solutions.${s.key}.price`) }}
            <small>{{ t(`solutions.${s.key}.period`) }}</small>
          </p>
          <p class="slide-tagline">{{ t(`solutions.${s.key}.tagline`) }}</p>
          <ul class="feature-list">
            <li>{{ t(`solutions.${s.key}.f1`) }}</li>
            <li>{{ t(`solutions.${s.key}.f2`) }}</li>
            <li>{{ t(`solutions.${s.key}.f3`) }}</li>
            <li v-if="t(`solutions.${s.key}.f4`) !== `solutions.${s.key}.f4`">
              {{ t(`solutions.${s.key}.f4`) }}
            </li>
          </ul>
          <a class="btn btn-accent" :href="SITE.whatsapp" target="_blank" rel="noopener noreferrer">
            {{ t('common.specialist') }}
          </a>
        </div>
      </div>
    </div>

    <button class="arrow arrow-prev" aria-label="Anterior" @click="prev">‹</button>
    <button class="arrow arrow-next" aria-label="Próximo" @click="next">›</button>

    <div class="dots">
      <button
        v-for="(s, i) in SOLUTIONS"
        :key="s.key"
        class="dot"
        :class="{ active: i === index }"
        :aria-label="t(`solutions.${s.key}.name`)"
        @click="go(i)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  border-radius: var(--r);
  background: var(--white);
  border: 1px solid var(--border);
  box-shadow: var(--sh-md);
}

.track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  flex: 0 0 100%;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  min-width: 0;
}

.slide-media {
  position: relative;
  background: var(--bg);
}

.slide-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.slide-body {
  padding: 2.4rem 2.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.slide-audience {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.3rem;
}

.slide-body h3 {
  font-family: 'Fraunces', serif;
  font-size: clamp(1.4rem, 2.4vw, 1.9rem);
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.slide-price {
  font-family: 'Fraunces', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.8rem;
}

.slide-price small {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-muted);
}

.slide-tagline {
  color: var(--text-soft);
  font-size: 0.96rem;
  line-height: 1.6;
  margin-bottom: 0.4rem;
}

.slide-body .feature-list {
  margin-bottom: 1.6rem;
}

.badge {
  margin-bottom: 0.6rem;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: var(--r-full);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary);
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--sh-sm);
  transition: all 0.15s;
  z-index: 2;
}

.arrow:hover {
  background: var(--white);
  box-shadow: var(--sh-md);
}

.arrow-prev {
  left: 1rem;
}
.arrow-next {
  right: 1rem;
}

.dots {
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  z-index: 2;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: var(--r-full);
  border: none;
  background: rgba(15, 30, 26, 0.25);
  cursor: pointer;
  padding: 0;
  transition: all 0.2s;
}

.dot.active {
  background: var(--accent);
  width: 26px;
  border-radius: var(--r-full);
}

@media (max-width: 760px) {
  .slide {
    grid-template-columns: 1fr;
  }

  .slide-media {
    aspect-ratio: 16 / 10;
  }

  .slide-body {
    padding: 1.6rem 1.4rem 2.6rem;
  }

  .arrow {
    width: 38px;
    height: 38px;
    font-size: 1.3rem;
  }

  .arrow-prev {
    left: 0.5rem;
  }
  .arrow-next {
    right: 0.5rem;
  }
}
</style>
