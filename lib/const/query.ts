enum Query {
  Catalog = `
    query searchStoreQuery(
      $allowCountries: String, $category: String, $count: Int, $country: String!,
      $keywords: String, $locale: String, $namespace: String, $itemNs: String,
      $sortBy: String, $sortDir: String, $start: Int, $tag: String, $releaseDate: String) { 
        Catalog { 
          searchStore (allowCountries: $allowCountries, category: $category, count: $count, country: $country
            keywords: $keywords, locale: $locale, namespace: $namespace, itemNs: $itemNs,
            sortBy: $sortBy, sortDir: $sortDir, start: $start, tag: $tag, releaseDate: $releaseDate) {
              elements {
                title id namespace description
              }
            }
        } 
    } 
  `,
}

export default Query;