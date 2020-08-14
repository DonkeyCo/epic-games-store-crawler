# epic-games-store-crawler

***epic-games-store-crawler*** is a crawler, which retrieves data from the *Epic Games Store*. It's purpose is to provide easy to access methods to crawl specific store data such as *current game prices*, *free games*, *categories*, *etc*. 

## Installation

### Install using npm

`npm install epic-games-store-crawler`

### Install using yarn

`yarn add epic-games-store-crawler`

### Install using source

Clone the repository  \
```git clone https://github.com/DonkeyCo/epic-games-store-crawler.git```

Install dependencies \
`npm install` or `yarn install`

Run build script \
`npm run build` or `yarn run build`

Use files in `dist` folder for coding

## Usage

### Import module

To use ***epic-games-store-crawler*** you have to import it: \
```js
// with require
var egsCrawler = require('epic-games-store-crawler)';
var crawler = egsCrawler.Crawler;
```

```js
// with import
import { Crawler } from 'epic-games-store-crawler';
```

### Using module - Examples


#### 1 - Crawling catalog items

```js
Crawler.getItems({
    allowedCountries: 'DE',
    category: 'games/edition/base|bundle/games|editors',
    count: 30,
    country: 'DE',
    locale: 'de'
});
```

```json
{
    "Catalog": {
        "searchStore":{
            "elements":[{
                "title":"Generic Game",
                "id":"3x4mpl31d",
                "namespace":"example",
                "description":"Generic Description",
                "seller": {
                    "name":"Generic"
                },
                "price": {
                    "totalPrice": {
                        "discountPrice":0,
                        "originalPrice":0,
                        "voucherDiscount":0,
                        "discount":0,
                        "currencyCode":"EUR",
                        "currencyInfo": {
                            "decimals":2
                        }
                    }
                },
                "promotions": { 
                    "promotionalOffers": [{
                        "promotionalOffers":[{
                            "startDate":"2020-08-13T15:00:00.000Z",
                            "endDate":"2020-08-20T15:00:00.000Z"
                        }]
                    }]
                }
            }]
        }
    }
}
```


#### 2 - Crawling free games

```js
Crawler.getFreeGames({
    allowCountries: 'DE',
    country: 'DE',
    locale: 'de'
});
```

```json
// Returns
{
    "Catalog": {
        "searchStore":{
            "elements":[{
                "title":"Generic Game",
                "id":"3x4mpl31d",
                "namespace":"example",
                "description":"Generic Description",
                "seller": {
                    "name":"Generic"
                },
                "price": {
                    "totalPrice": {
                        "discountPrice":0,
                        "originalPrice":0,
                        "voucherDiscount":0,
                        "discount":0,
                        "currencyCode":"EUR",
                        "currencyInfo": {
                            "decimals":2
                        }
                    }
                },
                "promotions": { 
                    "promotionalOffers": [{
                        "promotionalOffers":[{
                            "startDate":"2020-08-13T15:00:00.000Z",
                            "endDate":"2020-08-20T15:00:00.000Z"
                        }]
                    }]
                }
            }]
        }
    }
}
```

#### 3 - Crawling catalog tags

```js
Crawler.getCatalogTags({
    namespace: 'epic',
    locale: 'de',
    start: 0,
    count: 999
});
```

```json
// Returns
{
    "Catalog": {
        "tags": {
            "elements": [{
                "aliases": [],
                "id":"9547",
                "name":"WINDOWS",
                "referenceCount":259,
                "status":"ACTIVE"  
            }]
        }
    }
}
```

#### 4 - Crawling news

```js
Crawler.getNews('de', 30);
```

```json
[{
    "jcr:isCheckedOut":true,
    "link":"/path/to/something",
    "_title":"title",
    "_noIndex":false,
    "_images_":[
        "https://example.com/image.png"
    ],"jcr:baseVersion":"abc-def-ghi",
    "_urlPattern":"/path/to/something",
    "lastModified":"2020-08-13T14:28:09.556Z",
    "_locale":"de",
    "_id":"abc-def-ghi",
    "trending":false,
    "image":"https://example.com/image.png",
    "trendingImage":"https://example.com/image.png",
    "cat":"Launcher",
    "_type":"Common Post Link",
    "sticky":false,
    "short":"Short text. Lorem Ipsum",
    "title":"Title. Lorem Ipsum",
    "date":"2020-08-13T19:00:00.000Z",
    "externalLink":"/path/to/something",
    "slug":"this-is-a-slug",
    "url":"/path/to/something",
    "urlPattern":"/path/to/something"
}]
```

## Contribution

If you are interested in contributing, feel free to create a PR or an issue.