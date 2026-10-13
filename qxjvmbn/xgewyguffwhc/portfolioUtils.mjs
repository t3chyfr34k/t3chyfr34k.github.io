export function findProjectBySlug(projects, slug) { return projects.find((project) => project.slug === slug) ?? null }
export function searchTroubleshootingArticles(articles, query) {
 const normalized = query.trim().toLowerCase()
 if (!normalized) return [...articles]
 return articles.filter((article) => [article.title,article.errorMessage,article.category,...article.keywords,...article.symptoms,...article.checks,...article.solutions].join(' ').toLowerCase().includes(normalized))
}
