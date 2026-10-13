export type SearchableTroubleshootingArticle = { title:string; errorMessage:string; category:string; keywords:string[]; symptoms:string[]; checks:string[]; solutions:string[] }
export function findProjectBySlug<T extends {slug:string}>(projects:readonly T[],slug:string):T|null
export function searchTroubleshootingArticles<T extends SearchableTroubleshootingArticle>(articles:readonly T[],query:string):T[]
