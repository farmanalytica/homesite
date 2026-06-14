<script setup lang="ts">
import { useI18n } from '../i18n'
import { SITE } from '../data/site'
import { SOLUTIONS } from '../data/solutions'
import SolutionCard from '../components/SolutionCard.vue'

const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="container">
      <p class="sec-label" style="color: var(--accent-soft)">{{ t('solutions.label') }}</p>
      <h1>{{ t('solutions.title') }}</h1>
      <p class="hero-lead">{{ t('solutions.lead') }}</p>
    </div>
  </section>

  <section class="alt">
    <div class="container">
      <div class="grid2">
        <SolutionCard v-for="s in SOLUTIONS" :key="s.key" :solution="s" />
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="cta-band">
        <h2>{{ t('cta.title') }}</h2>
        <p>{{ t('cta.text') }}</p>
        <a class="btn btn-white" :href="SITE.whatsapp" target="_blank" rel="noopener noreferrer">
          {{ t('cta.button') }}
        </a>
      </div>
    </div>
  </section>
</template>
