<script setup lang="ts">
import { useI18n } from '../i18n'
import { SITE } from '../data/site'
import { asset } from '../lib/asset'

const { t } = useI18n()
const year = 2026
</script>

<template>
  <footer>
    <div class="container foot-grid">
      <div class="foot-brand">
        <img class="foot-logo" :src="asset('logo-white.svg')" alt="FARM Analytica" />
        <p>{{ t('footer.tagline') }}</p>
      </div>

      <div class="foot-col">
        <h4>{{ t('footer.solutions') }}</h4>
        <router-link to="/solucoes">{{ t('solutions.basic.name') }}</router-link>
        <router-link to="/solucoes">{{ t('solutions.premium.name') }}</router-link>
        <router-link to="/solucoes">{{ t('solutions.assist.name') }}</router-link>
        <router-link to="/solucoes">{{ t('solutions.monitoramento.name') }}</router-link>
      </div>

      <div class="foot-col">
        <h4>{{ t('footer.company') }}</h4>
        <router-link to="/blog">{{ t('nav.blog') }}</router-link>
        <router-link to="/contato">{{ t('nav.contato') }}</router-link>
        <a :href="SITE.farmtools" target="_blank" rel="noopener noreferrer">FARM tools</a>
        <router-link to="/politica-de-privacidade">{{ t('footer.privacy') }}</router-link>
      </div>

      <div class="foot-col">
        <h4>{{ t('footer.follow') }}</h4>
        <a :href="SITE.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="SITE.instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a :href="SITE.whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </div>

    <div class="container foot-bottom">
      <span>© {{ year }} FARM Analytica · CNPJ {{ SITE.cnpj }}</span>
      <span>{{ t('footer.rights') }}</span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--primary);
  color: rgba(255, 255, 255, 0.78);
  padding: 3.5rem 0 2rem;
}

.foot-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.foot-logo {
  height: 30px;
  margin-bottom: 0.9rem;
}

.foot-brand p {
  font-size: 0.9rem;
  max-width: 32ch;
  line-height: 1.65;
}

.foot-col h4 {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 0.9rem;
}

.foot-col a {
  display: block;
  font-size: 0.9rem;
  padding: 0.28rem 0;
  color: rgba(255, 255, 255, 0.82);
  transition: color 0.15s;
}

.foot-col a:hover {
  color: var(--white);
}

.foot-bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.55);
}

@media (max-width: 768px) {
  .foot-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .foot-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
