import { Container, FiltersContainer, CardsContainer } from "./style";
import Input from "../../shared/components/Input";
import Card from "../../shared/components/Card";
import { useEffect, useState } from "react";
import dataStream from "../../data";
import { IAssetUpdated } from "../../shared/interfaces/AssetUpdated.interface";

const Assets = () => {
    const [inputValue, setInputValue] = useState("");

    const [assets, setAssets] = useState<IAssetUpdated>({
        id: 1,
        assetName: "BABKJ",
        lastUpdate: Date.now(),
        previewPrice: 28.2342,
        price: 28.2341,
        type: "Stock",
        market: "Nasdaq",
    });
    const [previewAssets, setPreviewAssets] = useState([]);

    useEffect(() => {
        // dataStream.subscribe(
        //     result => {
        //         // if (assets.length === 0 || previewAssets.length === 0) {
        //         setAssets({ ...result, previewPrice: result.price });
        //         // setPreviewAssets(result);
        //         // }
        //     },
        //     error => console.log(error)
        // );
    }, []);

    return (
        <Container>
            <FiltersContainer>
                <Input inputValue={inputValue} setInputValue={setInputValue} />
            </FiltersContainer>

            <CardsContainer>
                <Card asset={assets} />
            </CardsContainer>
        </Container>
    );
};

export default Assets;
