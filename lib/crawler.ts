import { gql, request} from "graphql-request";
import * as fetch from "node-fetch";

import { CatalogVar, FreeCatalogVar, News } from "./type/types";
import Constant from "./const/constants";
import Query from "./const/query";

const Crawler = function() {};

Crawler.getGames = async (variables: CatalogVar) => {
    const catalog = await request(Constant.GQL_BASE, gql`${Query.Catalog}`, variables);
    return catalog;
};

Crawler.getFreeGames = async (variables: FreeCatalogVar) => {
    const freeGames = await request(Constant.GQL_BASE, gql`${Query.FreeCatalog}`, variables);
    return freeGames;
}

Crawler.getNews = async (locale: String, limit?: number):Promise<News> => {
    const news = await fetch(`${Constant.SC_BASE}/${locale}/${Constant.SC_BLOG}?limit=${limit}`)
        .then(res => res.json());
    return news;
}

export default Crawler;
