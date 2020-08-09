import Crawler from "./crawler";

const a = async () => {
    console.log(await Crawler.getCatalog({
        allowCountries: "DE",
        category: "games/edition/base|bundles/games|editors",
        count: 30,
        country: "DE",
        locale: "de"
    }))
}

console.log(a());

export { Crawler };