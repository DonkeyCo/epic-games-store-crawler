import { gql, request} from "graphql-request"

import { CatalogVar } from "./type/types";
import Constant from "./const/constants";
import Query from "./const/query";

const Crawler = function() {};

Crawler.getCatalog = async (
    variables: CatalogVar
) => {
    const catalog = await request(Constant.GQL_BASE, gql`${Query.Catalog}`, variables);
    return catalog;
};

export default Crawler;
