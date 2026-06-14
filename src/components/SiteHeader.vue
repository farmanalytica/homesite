<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n, SUPPORTED_LOCALES, type Locale } from '../i18n'
import { SITE } from '../data/site'
import { SOLUTIONS } from '../data/solutions'
import { asset } from '../lib/asset'

const { locale, setLocale, t } = useI18n()
const menuOpen = ref(false)
const scrolled = ref(false)

const LANG_LABELS: Record<Locale, string> = { 'pt-BR': 'PT', 'en-US': 'EN' }

function closeMenu(): void {
  menuOpen.value = false
}

function onScroll(): void {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="{ solid: scrolled || menuOpen }">
    <div class="container nav">
      <router-link class="brand" to="/" @click="closeMenu" aria-label="FARM Analytica">
        <img class="brand-logo" :src="asset(scrolled || menuOpen ? 'logo.svg' : 'logo-white.svg')" alt="FARM Analytica" />
      </router-link>
      <div class="nav-right">
        <nav class="nav-links" :class="{ open: menuOpen }" aria-label="Navegação principal">
          <router-link to="/" @click="closeMenu">{{ t('nav.home') }}</router-link>
          <div class="nav-dd">
            <router-link class="dd-trigger" to="/solucoes" @click="closeMenu">
              {{ t('nav.solucoes') }}
              <svg class="dd-caret" viewBox="0 0 12 12" width="10" height="10" fill="currentColor" aria-hidden="true">
                <path d="M6 8.5 1.5 4h9z" />
              </svg>
            </router-link>
            <div class="dd-menu">
              <router-link
                v-for="s in SOLUTIONS"
                :key="s.key"
                :to="`/solucoes/${s.key}`"
                @click="closeMenu"
              >
                {{ t(`solutions.${s.key}.name`) }}
              </router-link>
              <span class="dd-sep"></span>
              <router-link class="dd-ft" to="/farm-tools" @click="closeMenu">
                <img :src="asset('farmtools-logo.svg')" alt="FARM tools" />
              </router-link>
            </div>
          </div>
          <router-link to="/blog" @click="closeMenu">{{ t('nav.blog') }}</router-link>
          <router-link to="/contato" @click="closeMenu">{{ t('nav.contato') }}</router-link>
        </nav>
        <div class="socials">
          <a :href="SITE.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.5h4.6V24H.2V8.5zM8.2 8.5h4.4v2.1h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.6v-6.9c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.66 1.8-2.66 3.66V24H8.2V8.5z" />
            </svg>
          </a>
          <a :href="SITE.instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.8.72 1.47 1.38 2.13.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.8-.3 1.47-.72 2.13-1.38.66-.66 1.07-1.33 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.12A5.86 5.86 0 0019.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-10.85a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
        </div>
        <div class="lang-toggle" role="group" :aria-label="t('langToggle.label')">
          <button
            v-for="code in SUPPORTED_LOCALES"
            :key="code"
            type="button"
            :class="{ active: locale === code }"
            @click="setLocale(code)"
          >
            {{ LANG_LABELS[code] }}
          </button>
        </div>
        <button
          class="menu-toggle"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? '✕' : '☰' }}
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: transparent;
  transition: background 0.25s, box-shadow 0.25s, border-color 0.25s;
  border-bottom: 1px solid transparent;
}

header.solid {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom-color: var(--border);
  box-shadow: var(--sh-sm);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 1.5rem;
}

.brand {
  display: inline-flex;
  align-items: center;
}

.brand-logo {
  height: 34px;
  width: auto;
  object-fit: contain;
  display: block;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.4rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.nav-links a {
  font-size: 0.92rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.92);
  transition: color 0.15s, opacity 0.15s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  opacity: 0.7;
}

header.solid .nav-links a {
  color: var(--text-soft);
}

header.solid .nav-links a:hover,
header.solid .nav-links a.router-link-active {
  color: var(--primary);
  opacity: 1;
}

/* Solutions dropdown */
.nav-dd {
  position: relative;
  display: flex;
  align-items: center;
}

.dd-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.dd-caret {
  transition: transform 0.18s;
}

.nav-dd:hover .dd-caret {
  transform: rotate(180deg);
}

.dd-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  box-shadow: var(--sh-md);
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px);
  transition: opacity 0.18s, transform 0.18s, visibility 0.18s;
  z-index: 60;
}

.nav-dd:hover .dd-menu,
.nav-dd:focus-within .dd-menu {
  opacity: 1;
  visibility: visible;
  transform: none;
}

.dd-menu a {
  color: var(--text-soft) !important;
  padding: 0.5rem 0.7rem;
  border-radius: 6px;
  font-size: 0.88rem;
  white-space: nowrap;
}

.dd-menu a:hover {
  background: var(--bg);
  color: var(--primary) !important;
}

.dd-sep {
  height: 1px;
  background: var(--border);
  margin: 0.3rem 0.2rem;
}

.dd-ft {
  padding: 0.55rem 0.7rem;
}

.dd-ft img {
  height: 18px;
  width: auto;
  display: block;
}

.socials {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--white);
}

header.solid .socials {
  color: var(--primary);
}

.socials a {
  display: inline-flex;
  opacity: 0.9;
  transition: opacity 0.15s;
}

.socials a:hover {
  opacity: 0.6;
}

.lang-toggle {
  display: inline-flex;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--r-full);
  padding: 0.18rem;
  gap: 0.12rem;
}

header.solid .lang-toggle {
  background: var(--bg);
  border-color: var(--border);
}

.lang-toggle button {
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  font-size: 0.72rem;
  padding: 0.26rem 0.58rem;
  border-radius: var(--r-full);
  cursor: pointer;
  transition: all 0.15s;
  font-family: 'Inter', sans-serif;
}

header.solid .lang-toggle button {
  color: var(--text-soft);
}

.lang-toggle button.active {
  background: var(--accent);
  color: var(--white);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--white);
  font-size: 1.3rem;
  line-height: 1;
  min-width: 40px;
  min-height: 40px;
  align-items: center;
  justify-content: center;
}

header.solid .menu-toggle {
  color: var(--text);
}

@media (max-width: 900px) {
  .menu-toggle {
    display: flex;
    order: 3;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.4rem;
    gap: 0.5rem;
    z-index: 40;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    color: var(--text-soft) !important;
    padding: 0.5rem 0;
    font-size: 0.98rem;
  }

  .nav-right {
    gap: 0.8rem;
  }

  .nav-dd {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .dd-caret {
    display: none;
  }

  .dd-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border: none;
    background: transparent;
    padding: 0 0 0 1rem;
    min-width: 0;
  }

  .dd-menu a {
    font-size: 0.92rem;
    padding: 0.4rem 0;
  }
}

@media (max-width: 480px) {
  .socials {
    display: none;
  }

  .nav {
    padding: 0.75rem 0;
  }

  .brand-logo {
    height: 30px;
  }
}
</style>
