import { render, screen } from "@testing-library/react";
import Card from "..";
import { IAssetUpdated } from "../../../interfaces/AssetUpdated.interface";

const stockAsset: IAssetUpdated = {
    id: 10009,
    assetName: "BAAAK",
    price: 15.89328952475085,
    lastUpdate: 1651802416230,
    type: "Stock",
    market: "Nasdaq",
    previewPrice: 15.88328952475085,
};

const currencyAsset: IAssetUpdated = {
    id: 10019,
    assetName: "BAABK/USD",
    price: 15.751986055283524,
    lastUpdate: 1651803192318,
    type: "Currency",
    previewPrice: 15.761986055283524,
};

describe("card tests", () => {
    it("tests if card is in the document", () => {
        render(<Card asset={stockAsset} />);

        const card = screen.getByTestId("card-container");

        expect(card).toBeInTheDocument();
    });

    it("tests if asset data is in the card", () => {
        render(<Card asset={stockAsset} />);

        const assetHeader = screen.getByTestId("asset-header");
        const assetType = screen.getByTestId("asset-type");
        const assetMarket = screen.getByTestId("asset-market");
        const assetPrice = screen.getByTestId("asset-price");

        expect(assetHeader).toHaveTextContent(stockAsset.assetName);
        expect(assetType).toHaveTextContent(stockAsset.type);
        expect(assetMarket).toHaveTextContent(stockAsset.market!);
        expect(assetPrice).toHaveTextContent(stockAsset.price.toFixed(4).toString());
    });

    it("tests if currency asset doesn't have asset market", () => {
        render(<Card asset={currencyAsset} />);

        const assetMarket = screen.queryByTestId("asset-market");

        expect(assetMarket).toBeNull();
    });
});
