<script setup lang="ts">
import { useI18n } from '../i18n'
import { SITE } from '../data/site'
import type { Solution } from '../data/solutions'
import { asset } from '../lib/asset'
import ImageGallery from './ImageGallery.vue'

defineProps<{ solution: Solution }>()
const { t } = useI18n()
</script>

<template>
  <div class="card sol-card" :class="{ featured: solution.featured }">
    <div class="sol-banner">
      <ImageGallery :images="solution.gallery.map(asset)" :alt="t(`solutions.${solution.key}.name`)" />
      <span v-if="solution.featured" class="badge">Recomendado</span>
    </div>
    <h3>{{ t(`solutions.${solution.key}.name`) }}</h3>
    <p class="sol-audience">{{ t(`solutions.${solution.key}.audience`) }}</p>
    <p class="card-price">
      {{ t(`solutions.${solution.key}.price`) }}
      <small>{{ t(`solutions.${solution.key}.period`) }}</small>
    </p>
    <p>{{ t(`solutions.${solution.key}.tagline`) }}</p>
    <ul class="feature-list">
      <li>{{ t(`solutions.${solution.key}.f1`) }}</li>
      <li>{{ t(`solutions.${solution.key}.f2`) }}</li>
      <li>{{ t(`solutions.${solution.key}.f3`) }}</li>
      <li v-if="t(`solutions.${solution.key}.f4`) !== `solutions.${solution.key}.f4`">
        {{ t(`solutions.${solution.key}.f4`) }}
      </li>
    </ul>
    <a class="btn btn-primary sol-cta" :href="SITE.whatsapp" target="_blank" rel="noopener noreferrer">
      {{ t('common.talkToUs') }}
    </a>
  </div>
</template>

<style scoped>
.sol-card {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 0;
  overflow: hidden;
}

.sol-banner {
  position: relative;
  margin: -1.5rem -1.5rem 1.2rem;
  aspect-ratio: 4 / 3;
}

.sol-banner .badge {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  margin: 0;
  background: var(--white);
  color: var(--primary);
  box-shadow: var(--sh-sm);
}

@media (max-width: 768px) {
  .sol-banner {
    margin: -1.2rem -1.2rem 1rem;
  }
}

@media (max-width: 480px) {
  .sol-banner {
    margin: -1rem -1rem 0.9rem;
  }
}

.sol-card.featured {
  border-color: var(--accent-border);
  box-shadow: var(--sh-md);
}

.sol-audience {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
}

.sol-cta {
  margin-top: auto;
  align-self: flex-start;
}

@media (max-width: 480px) {
  .sol-cta {
    align-self: stretch;
  }
}
</style>
