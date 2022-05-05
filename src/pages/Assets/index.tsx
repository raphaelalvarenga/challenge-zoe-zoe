import { Container, FiltersContainer, CardsContainer } from "./style";
import Input from "../../shared/components/Input";
import Card from "../../shared/components/Card";
import { useEffect, useState } from "react";
import dataStream from "../../data";
import { IAssetUpdated } from "../../shared/interfaces/AssetUpdated.interface";
import Select, { SingleValue } from "react-select";
import store from "../../shared/classes/Store.class";

let loadedAssets: IAssetUpdated[] = [];

const Assets = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectValue, setSelectValue] = useState<SingleValue<{ value: string; label: string }>>({
        value: "all",
        label: "All",
    });

    const [assets, setAssets] = useState<IAssetUpdated[]>([]);

    const [lastTimeFired, setLastTimeFired] = useState<number>(Date.now());

    useEffect(() => {
        store.initInputValue(setInputValue);

        if (!localStorage.getItem("@zoe-zoe-financial-market:selectValue")) {
            localStorage.setItem("@zoe-zoe-financial-market:selectValue", "all");
        }

        const subscription = dataStream.subscribe({
            next: res => {
                loadedAssets.length === 0 || !loadedAssets.find(asset => asset.id === res.id)
                    ? loadedAssets.push({ ...res, previewPrice: res.price })
                    : (loadedAssets = loadedAssets.map(asset =>
                          asset.id === res.id
                              ? { ...asset, price: res.price, previewPrice: asset.price, lastUpdate: res.lastUpdate }
                              : asset
                      ));

                if (Date.now() - lastTimeFired >= 1000) {
                    setAssets(loadedAssets);
                    setLastTimeFired(Date.now());
                }
            },
            error: e => console.log(e),
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const filterAssets = () => {
        let filteredAssets: IAssetUpdated[] = [];

        filteredAssets =
            selectValue?.value === "all" ? assets : assets.filter(asset => asset.type === selectValue?.label);

        filteredAssets = filteredAssets.filter(asset => asset.assetName.includes(inputValue.toUpperCase()));

        return filteredAssets;
    };

    return (
        <Container>
            <FiltersContainer>
                <Input inputValue={inputValue} setInputValue={setInputValue} />
                <Select
                    value={selectValue}
                    name="assetType"
                    options={[
                        { value: "all", label: "All" },
                        { value: "stock", label: "Stock" },
                        { value: "currency", label: "Currency" },
                    ]}
                    onChange={(newValue: SingleValue<{ value: string; label: string }>) => setSelectValue(newValue)}
                />
            </FiltersContainer>

            <CardsContainer>
                {filterAssets().map(asset => (
                    <Card key={asset.id} asset={asset} />
                ))}
            </CardsContainer>
        </Container>
    );
};

export default Assets;
