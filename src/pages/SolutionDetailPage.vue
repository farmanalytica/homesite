<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../i18n'
import { SITE } from '../data/site'
import { SOLUTIONS } from '../data/solutions'
import { asset } from '../lib/asset'
import ImageGallery from '../components/ImageGallery.vue'

const route = useRoute()
const { t } = useI18n()

const solution = computed(() => SOLUTIONS.find((s) => s.key === route.params.slug))

const features = computed(() => {
  const k = solution.value?.key
  if (!k) return []
  return (['f1', 'f2', 'f3', 'f4'] as const)
    .map((f) => ({ f, val: t(`solutions.${k}.${f}`) }))
    .filter((x) => x.val !== `solutions.${k}.${x.f}`)
    .map((x) => x.val)
})

const detail = computed(() => {
  const k = solution.value?.key
  if (!k) return ''
  const v = t(`solutions.${k}.detail`)
  return v === `solutions.${k}.detail` ? '' : v
})
</script>

<template>
  <template v-if="solution">
    <section class="hero">
      <div class="container">
        <router-link class="hero-back" to="/solucoes">← {{ t('solutions.back') }}</router-link>
        <p class="sec-label" style="color: var(--accent-soft)">
          {{ t(`solutions.${solution.key}.audience`) }}
        </p>
        <h1>{{ t(`solutions.${solution.key}.name`) }}</h1>
        <p class="hero-lead">{{ t(`solutions.${solution.key}.tagline`) }}</p>
      </div>
    </section>

    <section class="alt">
      <div class="container detail-grid">
        <div class="detail-media">
          <ImageGallery :images="solution.gallery.map(asset)" :alt="t(`solutions.${solution.key}.name`)" />
        </div>
        <div class="detail-body">
          <p class="card-price">
            {{ t(`solutions.${solution.key}.price`) }}
            <small>{{ t(`solutions.${solution.key}.period`) }}</small>
          </p>
          <p v-if="detail" class="detail-text">{{ detail }}</p>
          <ul class="feature-list">
            <li v-for="f in features" :key="f">{{ f }}</li>
          </ul>
          <a class="btn btn-accent btn-lg" :href="SITE.whatsapp" target="_blank" rel="noopener noreferrer">
            {{ t('common.specialist') }}
          </a>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section>
      <div class="container">
        <p class="sec-label">{{ t('steps.label') }}</p>
        <h2>{{ t('steps.title') }}</h2>
        <div class="steps-col" style="margin-top: 1.8rem">
          <div class="step">
            <div class="step-num">1</div>
            <div class="step-body">
              <h3>{{ t('steps.s1t') }}</h3>
              <p>{{ t('steps.s1d') }}</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <div class="step-body">
              <h3>{{ t('steps.s2t') }}</h3>
              <p>{{ t('steps.s2d') }}</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <div class="step-body">
              <h3>{{ t('steps.s3t') }}</h3>
              <p>{{ t('steps.s3d') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="alt">
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

  <section v-else class="hero">
    <div class="container">
      <h1>404</h1>
      <p class="hero-lead">Solução não encontrada.</p>
      <router-link class="btn btn-white" to="/solucoes">{{ t('solutions.back') }}</router-link>
    </div>
  </section>
</template>

<style scoped>
.hero-back {
  display: inline-block;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-soft);
  opacity: 0.9;
}

.hero-back:hover {
  opacity: 1;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

.detail-media {
  aspect-ratio: 4 / 3;
  border-radius: var(--r);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--sh-md);
}

.detail-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.detail-text {
  color: var(--text-soft);
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 0.4rem;
}

.detail-body .feature-list {
  margin-bottom: 1.8rem;
}

@media (max-width: 820px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
