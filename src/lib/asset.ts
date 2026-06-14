// Resolve a public asset path against the configured base URL so it works both
// at the site root (custom domain) and under a GitHub Pages subpath.
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
