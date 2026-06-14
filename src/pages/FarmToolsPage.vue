<script setup lang="ts">
import { useI18n } from '../i18n'
import { SITE } from '../data/site'
import { asset } from '../lib/asset'

const { t } = useI18n()
const modules = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8'] as const
</script>

<template>
  <section class="hero">
    <div class="container">
      <p class="sec-label" style="color: var(--accent-soft)">{{ t('project.label') }}</p>
      <img class="ft-hero-logo" :src="asset('farmtools-logo.svg')" alt="FARM tools" />
      <p class="hero-lead">{{ t('project.pageLead') }}</p>
      <div class="hero-actions">
        <a class="btn btn-accent" :href="SITE.farmtools" target="_blank" rel="noopener noreferrer">
          {{ t('project.visit') }}
        </a>
        <a class="btn btn-ghost" :href="SITE.farmtoolsGithub" target="_blank" rel="noopener noreferrer">
          {{ t('project.github') }}
        </a>
      </div>
    </div>
  </section>

  <section class="alt">
    <div class="container">
      <p class="sec-lead" style="max-width: 70ch">{{ t('project.desc') }}</p>

      <p class="sec-label" style="margin-top: 1rem">{{ t('project.modulesTitle') }}</p>
      <ul class="about-services" style="margin-bottom: 0">
        <li v-for="m in modules" :key="m">{{ t(`project.${m}`) }}</li>
      </ul>
    </div>
  </section>

  <section>
    <div class="container">
      <p class="sec-label">{{ t('project.eduTitle') }}</p>
      <h2>{{ t('blogTeaser.title') }}</h2>
      <p class="sec-lead">{{ t('project.edu') }}</p>
      <a class="btn btn-primary" :href="SITE.farmtools" target="_blank" rel="noopener noreferrer">
        {{ t('project.visit') }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.ft-hero-logo {
  height: clamp(56px, 9vw, 92px);
  width: auto;
  margin-bottom: 1.4rem;
  /* logo is dark teal; invert to white over the dark hero */
  filter: brightness(0) invert(1);
}
</style>
