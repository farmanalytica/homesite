import { ref, computed, type App } from 'vue'
import ptBR from './pt-BR'
import enUS from './en-US'

export const SUPPORTED_LOCALES = ['pt-BR', 'en-US'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

const STORAGE_KEY = 'farmAnalyticaLang'

const messages: Record<Locale, Record<string, unknown>> = {
  'pt-BR': ptBR,
  'en-US': enUS,
}

function detectLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && (SUPPORTED_LOCALES as readonly string[]).includes(saved)) return saved as Locale
  const browser = (navigator.language || 'pt').toLowerCase()
  return browser.startsWith('en') ? 'en-US' : 'pt-BR'
}

export const locale = ref<Locale>(detectLocale())

export function setLocale(value: Locale): void {
  if (!(SUPPORTED_LOCALES as readonly string[]).includes(value)) return
  locale.value = value
  localStorage.setItem(STORAGE_KEY, value)
  document.documentElement.lang = value
}

/** Resolve a dot-separated key in the active locale, falling back to pt-BR. */
export function t(key: string): string {
  const resolve = (msgs: Record<string, unknown>): unknown =>
    key.split('.').reduce<unknown>((node, part) => {
      if (node == null || typeof node !== 'object') return undefined
      return (node as Record<string, unknown>)[part]
    }, msgs)
  const value = resolve(messages[locale.value])
  if (value !== undefined) return String(value)
  const fallback = resolve(messages['pt-BR'])
  return fallback !== undefined ? String(fallback) : key
}

export const i18n = {
  install(app: App): void {
    document.documentElement.lang = locale.value
    app.config.globalProperties.$t = t
    app.provide('i18n', { locale, setLocale, t })
  },
}

export function useI18n() {
  return { locale, setLocale, t, currentLocale: computed(() => locale.value) }
}
