import { FC } from "react";
import { IAssetUpdated } from "../../interfaces/AssetUpdated.interface";
import Card from "../Card";
import { CardsContainer } from "./style";

interface ICards {
    filterAssets: () => IAssetUpdated[];
}

const Cards: FC<ICards> = ({ filterAssets }) => (
    <CardsContainer data-testid="cards-container">
        {filterAssets().map(asset => (
            <Card key={asset.id} asset={asset} />
        ))}
    </CardsContainer>
);

export default Cards;
