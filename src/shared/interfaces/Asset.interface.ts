export type AssetType = "Stock" | "Currency";

export interface Asset {
    id: number;
    assetName: string; // The asset name, like "AAPL" for Apple stock or "EUR" for Euro Currency
    price: number; // asset current price (in USD)
    lastUpdate: number; // timestamp
    type: AssetType; // asset type Currency (e.g. USD, EUR...) or Stock (Samsung, Google)
    market?: string; // for stock asset only
}
