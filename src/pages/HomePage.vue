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
          <img
            :src="asset('farmtools-logo.svg')"
            alt="FARM tools"
            style="height: 54px; width: auto; margin: 0.2rem 0 0.9rem; display: block"
          />
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

  <!-- Discrete floating WhatsApp -->
  <a
    class="wa-fab"
    :href="SITE.whatsapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.515 5.26l-.999 3.648 3.973-1.115zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  </a>
</template>

<style scoped>
.wa-fab {
  position: fixed;
  right: 1.4rem;
  bottom: 1.4rem;
  z-index: 80;
  width: 52px;
  height: 52px;
  border-radius: var(--r-full);
  background: #25d366;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
  opacity: 0.9;
  transition: transform 0.18s, opacity 0.18s, box-shadow 0.18s;
}

.wa-fab:hover {
  opacity: 1;
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);
}

@media (max-width: 480px) {
  .wa-fab {
    width: 48px;
    height: 48px;
    right: 1rem;
    bottom: 1rem;
  }
}
</style>

