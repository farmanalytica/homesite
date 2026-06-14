<script setup lang="ts">
import { useI18n } from '../i18n'
import { SITE } from '../data/site'
import { POSTS } from '../data/posts'
import { FOUNDERS } from '../data/founders'
import { asset } from '../lib/asset'
import SolutionsCarousel from '../components/SolutionsCarousel.vue'

const { t } = useI18n()
const teaserPosts = POSTS.slice(0, 3)
</script>

<template>
  <!-- Hero -->
  <section class="hero hero--home">
    <div class="hero-bg" :style="{ backgroundImage: `url('${asset('img/hero-field.webp')}')` }"></div>
    <div class="container hero-inner">
      <img class="hero-logo" :src="asset('logo-white.svg')" alt="FARM Analytica" />
      <p class="hero-tagline">{{ t('hero.title') }}</p>
      <a class="btn btn-accent btn-lg" :href="SITE.whatsapp" target="_blank" rel="noopener noreferrer">
        {{ t('hero.cta') }}
      </a>
    </div>
  </section>

  <!-- Solutions -->
  <section id="solucoes" class="alt">
    <div class="container">
      <p class="sec-label">{{ t('solutions.label') }}</p>
      <h2>{{ t('solutions.title') }}</h2>
      <p class="sec-lead">{{ t('solutions.lead') }}</p>
      <SolutionsCarousel />
    </div>
  </section>

  <!-- About -->
  <section class="alt">
    <div class="container">
      <p class="sec-label">{{ t('about.label') }}</p>
      <h2>{{ t('about.title') }}</h2>
      <p class="sec-lead">{{ t('about.lead') }}</p>
      <ul class="about-services">
        <li>{{ t('about.s1') }}</li>
        <li>{{ t('about.s2') }}</li>
        <li>{{ t('about.s3') }}</li>
        <li>{{ t('about.s4') }}</li>
      </ul>

      <p class="sec-label founders-label">{{ t('founders.label') }}</p>
      <h2>{{ t('founders.title') }}</h2>
      <div class="team">
        <div v-for="f in FOUNDERS" :key="f.key" class="team-card">
          <img class="team-avatar" :src="asset(f.image)" :alt="t(`founders.${f.key}.name`)" loading="lazy" />
          <div class="team-info">
            <div class="role">{{ t(`founders.${f.key}.role`) }}</div>
            <h3>{{ t(`founders.${f.key}.name`) }}</h3>
            <p>{{ t(`founders.${f.key}.bio`) }}</p>
            <a class="founder-linkedin" :href="f.linkedin" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.5h4.6V24H.2V8.5zM8.2 8.5h4.4v2.1h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.6v-6.9c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.66 1.8-2.66 3.66V24H8.2V8.5z" />
              </svg>
              {{ t('founders.linkedin') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Blog teaser -->
  <section>
    <div class="container">
      <p class="sec-label">{{ t('blogTeaser.label') }}</p>
      <h2>{{ t('blogTeaser.title') }}</h2>
      <p class="sec-lead">{{ t('blogTeaser.lead') }}</p>
      <div class="post-list">
        <a
          v-for="post in teaserPosts"
          :key="post.url"
          class="post"
          :href="post.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>{{ post.title }}</h3>
          <p class="post-meta">{{ post.topic }}</p>
        </a>
      </div>
      <router-link class="card-link" to="/blog" style="margin-top: 1.4rem">
        {{ t('blogTeaser.cta') }} →
      </router-link>
    </div>
  </section>

  <!-- Open-source project -->
  <section>
    <div class="container">
      <div class="project-band">
        <div class="project-text">
          <p class="sec-label">{{ t('project.label') }}</p>
          <h2>{{ t('project.title') }}</h2>
          <p class="sec-lead" style="margin-bottom: 0.9rem">{{ t('project.desc') }}</p>
          <p class="sec-lead" style="margin-bottom: 1.6rem">{{ t('project.edu') }}</p>
          <div class="project-actions">
            <a class="btn btn-accent" :href="SITE.farmtools" target="_blank" rel="noopener noreferrer">
              {{ t('project.visit') }}
            </a>
            <a class="btn btn-ghost-dark" :href="SITE.farmtoolsGithub" target="_blank" rel="noopener noreferrer">
              {{ t('project.github') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA band -->
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
