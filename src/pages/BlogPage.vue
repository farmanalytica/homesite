<script setup lang="ts">
import { useI18n } from '../i18n'
import { POSTS } from '../data/posts'

const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="container">
      <p class="sec-label" style="color: var(--accent-soft)">{{ t('blogTeaser.label') }}</p>
      <h1>{{ t('blogTeaser.title') }}</h1>
      <p class="hero-lead">{{ t('blogTeaser.lead') }}</p>
    </div>
  </section>

  <section class="alt">
    <div class="container">
      <div class="post-list">
        <a
          v-for="post in POSTS"
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
    </div>
  </section>
</template>
