import { ParserInterface } from "./ParserInterface";

export const SalesDoublerParser: ParserInterface = (params: URLSearchParams) => {
    if (params.get("utm_source") !== "cpanet_salesdoubler" && !params.has("aff_sub")) {
        return;
    }
    return {
        source: "sales-douber",
        config: {
            clickId: params.get("aff_sub"),
            aid: params.get("utm_campaign"), // web master identifier
        }
    }
};