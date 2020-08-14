import { gql, request} from "graphql-request";
import * as fetch from "node-fetch";

import { CatalogVar, FreeCatalogVar, News, CatalogTags } from "./type/types";
import Constant from "./const/constants";
import Query from "./const/query";

/**
 * A crawler for the Epic Games Store. Crawls various data from the Epic Games Store.
 */
const Crawler = function() {};

/**
 * Retrieve all catalog items for given variables
 * @param variables variables for GraphQL query
 * 
 * @example
 * 
 * import { Crawler } from 'epic-games-store-crawler';
 * 
 * Crawler.getGames({
 *   allowedCountries: 'DE',
 *   category: 'games/edition/base|bundles/games|editors',
 *   count: 30,
 *   country: 'DE',
 *   locale: 'de'
 * });
 * 
 * @returns catalog items
 */
Crawler.getGames = async (variables: CatalogVar) => {
    const catalog = await request(Constant.GQL_BASE, gql`${Query.Catalog}`, variables);
    return catalog;
};

/**
 * Retrieve all free catalog items for given variables
 * @param variables variables for GraphQL query
 * 
 * @example
 * 
 * import { Crawler }from 'epic-games-store-crawler';
 * 
 * Crawler.getFreeGames({
 *   allowCountries: 'DE',
 *   country: 'DE',
 *   locale: 'de'
 * });
 * 
 * @returns free catalog items
 */
Crawler.getFreeGames = async (variables: FreeCatalogVar) => {
    const freeGames = await request(Constant.GQL_BASE, gql`${Query.FreeCatalog}`, variables);
    return freeGames;
}

/**
 * Retrieve news feed
 * @param locale current locale
 * @param limit number of entries
 * 
 * @example
 * 
 * import Crawler from 'epic-games-store-crawler';
 * 
 * Crawler.getNews('de', 30);
 * 
 * @returns Epic Games Store news
 */
Crawler.getNews = async (locale: String, limit?: number):Promise<News> => {
    const news = await fetch(`${Constant.SC_BASE}/${locale}/${Constant.SC_BLOG}?limit=${limit}`)
        .then(res => res.json());
    return news;
}

/**
 * Retrieve catalog tags
 * @param {CatalogTags} variables 
 * 
 * @example
 * 
 * import { Crawler } from 'epic-games-store-crawler';
 * 
 * Crawler.getCatalogTags({
 *   namespace: 'epic',
 *   locale: 'de',
 *   start: 0,
 *   count: 999
 * });
 * 
 * @returns catalog tags
 */
Crawler.getCatalogTags = async (variables: CatalogTags) => {
    const tags = await request(Constant.GQL_BASE, gql`${Query.CatalogTags}`, variables);
    return tags;
}

export default Crawler;
