# Epic Games Store

## GraphQL API

The Epic Games Store retrieves store data by communicating with a GraphQL API. The API can be reached at `https://graphql.epicgames.com/graphql`.

### Epic's GraphQL Objects

#### Catalog

```graphql
Catalog {
    catalogOffers/searchStore {
        elements[] {
            title
            id
            namespace
            description
            effectiveDate
            keyImages[] {
                type
                url
            },
            seller {
                id
                name
            }
            productSlug
            urlSlug
            url
            items[] {
                id
                namespace
            }
            customAttributes[] {
                key
                value
            },
            categories[] {
                path
            },
            price {
                totalPrice {
                    discountPrice
                    originalPrice
                    voucherDiscount
                    discount
                    currencyCode
                    currencyInfo {
                        decimals
                    },
                    fmtPrice {
                        originalPrice
                        discountPrice
                        intermediatePrice
                    }
                }
            },
            lineOffers[] {
                appliedRules[] {}
            }
        },
        paging {
            count
            total
        }
    }
}
```