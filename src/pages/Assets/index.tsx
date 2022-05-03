import { Container, FiltersContainer, CardsContainer } from "./style";
import Input from "../../shared/components/Input";
import Card from "../../shared/components/Card";
import { useEffect, useState } from "react";
import dataStream from "../../data";
import { IAssetUpdated } from "../../shared/interfaces/AssetUpdated.interface";
import Select, { SingleValue } from 'react-select'

const Assets = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectValue, setSelectValue] = useState<SingleValue<{value: string, label: string}>>({value: "all", label: "All"});

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
        //         // assetsTest.push(result);
        //         // setAssets(prev => [...prev, { ...result, previewPrice: result.price }]);
        //     },
        //     error => console.log(error)
        // );
    }, []);

    useEffect(() => {
        if (selectValue?.value === "all") {
            setFilteredAssets(assets)
            return;
        }

        setFilteredAssets(assets.filter(asset => asset.type === selectValue?.label));
    }, [selectValue]);

    return (
        <Container>
            <FiltersContainer>
                <Input inputValue={inputValue} setInputValue={setInputValue} />
            <Select
                value={selectValue}
                name="assetType"
                options={[{value: "all", label: "All"}, {value: "stock", label: "Stock"}, {value: "currency", label: "Currency"}]}
                onChange = {(newValue: SingleValue<{value: string, label: string}>) => setSelectValue(newValue)}
            />
            </FiltersContainer>


            <CardsContainer>
                {filteredAssets.filter(asset => asset.assetName.includes(inputValue.toUpperCase())).map(asset => <Card key={asset.id} asset={asset} />)}
            </CardsContainer>
        </Container>
    );
};

export default Assets;
