import { Container, AssetHeader, AssetBody, AssetType, AssetPrice, AssetArrows, ArrowUp, ArrowDown } from "./style";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { FC } from "react";
import { IAssetUpdated } from "../../interfaces/AssetUpdated.interface";

interface ICard {
    asset: IAssetUpdated;
}

const Card: FC<ICard> = ({ asset }) => {
    return (
        <Container>
            <AssetHeader>{asset.assetName}</AssetHeader>
            <AssetBody>
                <AssetType>
                    <div>{asset.type}</div>
                    {asset.market && <div>{asset.market}</div>}
                </AssetType>

                <AssetPrice status={asset.price > asset.previewPrice ? "bull" : "bear"}>{asset.price}</AssetPrice>

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
