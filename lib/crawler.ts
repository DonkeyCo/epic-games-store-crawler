import { gql, request} from "graphql-request";
import * as fetch from "node-fetch";

import { CatalogVar, FreeCatalogVar, News } from "./type/types";
import Constant from "./const/constants";
import Query from "./const/query";

/**
 * A crawler for the Epic Games Store. Crawls various data from the Epic Games Store.
 */
const Crawler = function() {};

/**
 * Retrieve all catalog items for given variables
 * @param variables variables for GraphQL query
 * @returns catalog items
 */
Crawler.getGames = async (variables: CatalogVar) => {
    const catalog = await request(Constant.GQL_BASE, gql`${Query.Catalog}`, variables);
    return catalog;
};

/**
 * Retrieve all free catalog items for given variables
 * @param variables variables for GraphQL query
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
 * @returns Epic Games Store news
 */
Crawler.getNews = async (locale: String, limit?: number):Promise<News> => {
    const news = await fetch(`${Constant.SC_BASE}/${locale}/${Constant.SC_BLOG}?limit=${limit}`)
        .then(res => res.json());
    return news;
}

export default Crawler;
