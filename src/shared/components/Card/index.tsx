import {
    Container,
    AssetHeader,
    AssetBody,
    AssetInfo,
    AssetPrice,
    AssetArrows,
    ArrowUp,
    ArrowDown,
    AssetType,
    AssetMarket,
} from "./style";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { FC } from "react";
import { IAssetUpdated } from "../../interfaces/AssetUpdated.interface";

interface ICard {
    asset: IAssetUpdated;
}

const Card: FC<ICard> = ({ asset }) => {
    return (
        <Container data-testid="card-container">
            <AssetHeader data-testid="asset-header">{asset.assetName}</AssetHeader>
            <AssetBody>
                <AssetInfo>
                    <AssetType data-testid="asset-type">{asset.type}</AssetType>
                    {asset.market && <AssetMarket data-testid="asset-market">{asset.market}</AssetMarket>}
                </AssetInfo>

                <AssetPrice status={asset.price > asset.previewPrice ? "bull" : "bear"} data-testid="asset-price">
                    {asset.price.toFixed(4)}
                </AssetPrice>

                <AssetArrows>
                    <ArrowUp isActive={asset.price > asset.previewPrice}>
                        <ImArrowUp />
                    </ArrowUp>

                    <ArrowDown isActive={asset.price < asset.previewPrice}>
                        <ImArrowDown />
                    </ArrowDown>
                </AssetArrows>
            </AssetBody>
        </Container>
    );
};

export default Card;
