<script setup lang="ts">
import { useI18n } from '../i18n'
import { SITE } from '../data/site'

const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="container">
      <p class="sec-label" style="color: var(--accent-soft)">{{ t('contact.label') }}</p>
      <h1>{{ t('contact.title') }}</h1>
      <p class="hero-lead">{{ t('contact.lead') }}</p>
    </div>
  </section>

  <section class="alt">
    <div class="container">
      <div class="contact-card">
        <div class="contact-row">
          <span>📞</span>
          <span><strong>{{ t('contact.phone') }}:</strong>
            <a :href="SITE.phoneHref">{{ SITE.phone }}</a></span>
        </div>
        <div class="contact-row">
          <span>✉️</span>
          <span><strong>{{ t('contact.email') }}:</strong>
            <a :href="`mailto:${SITE.email}`">{{ SITE.email }}</a></span>
        </div>
        <div class="contact-row">
          <span>🏢</span>
          <span><strong>{{ t('contact.cnpj') }}:</strong> {{ SITE.cnpj }}</span>
        </div>
        <a
          class="btn btn-primary"
          style="margin-top: 1.4rem"
          :href="SITE.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t('contact.whatsapp') }}
        </a>
      </div>
    </div>
  </section>
</template>
