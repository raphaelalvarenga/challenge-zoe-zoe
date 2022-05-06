import { render, screen } from "@testing-library/react";
import { useState } from "react";
import { SingleValue } from "react-select";
import Cards from "..";
import { IAssetUpdated } from "../../../interfaces/AssetUpdated.interface";
import { ISelectValue } from "../../../interfaces/SelectValue.interface";

const MockedCards = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [selectValue, setSelectValue] = useState<SingleValue<ISelectValue>>({
        value: "all",
        label: "All",
    });

    const [assets, setAssets] = useState<IAssetUpdated[]>([
        {
            id: 10002,
            assetName: "BAAAC",
            price: 11.339821776489853,
            lastUpdate: 1651804381662,
            type: "Stock",
            previewPrice: 11.339821776489853,
            market: "Nasdaq",
        },

        {
            id: 10012,
            assetName: "BAABC/USD",
            price: 9.937932001689479,
            lastUpdate: 1651804381662,
            type: "Currency",
            previewPrice: 9.937932001689479,
        },

        {
            id: 10003,
            assetName: "BAAAD",
            price: 10.170844634401748,
            lastUpdate: 1651804381663,
            type: "Stock",
            previewPrice: 10.170844634401748,
            market: "Nasdaq",
        },
    ]);

    const filterAssets = () => {
        let filteredAssets: IAssetUpdated[] = [];

        filteredAssets =
            selectValue?.value === "all" ? assets : assets.filter(asset => asset.type === selectValue?.label);

        filteredAssets = filteredAssets.filter(asset => asset.assetName.includes(inputValue.toUpperCase()));

        return filteredAssets;
    };

    return <Cards filterAssets={filterAssets} />;
};

describe("cards tests", () => {
    it("tests if cards are in the document", () => {
        render(<MockedCards />);

        const cards = screen.getByTestId("cards-container");

        expect(cards).toBeInTheDocument();
    });

    it("tests if there are three cards", () => {
        render(<MockedCards />);

        const cards = screen.getAllByTestId("card-container");

        expect(cards).toHaveLength(3);
    });
});
