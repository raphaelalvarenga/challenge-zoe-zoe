import { Container, FiltersContainer } from "./style";
import Input from "../../shared/components/Input";
import { useEffect, useState } from "react";
import dataStream from "../../data";
import { IAssetUpdated } from "../../shared/interfaces/AssetUpdated.interface";
import store from "../../shared/classes/Store.class";
import { ISelectValue } from "../../shared/interfaces/SelectValue.interface";
import Select from "../../shared/components/Select";
import { SingleValue } from "react-select";
import Cards from "../../shared/components/Cards";

let loadedAssets: IAssetUpdated[] = [];

const Assets = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [selectValue, setSelectValue] = useState<SingleValue<ISelectValue>>({
        value: "all",
        label: "All",
    });

    const [assets, setAssets] = useState<IAssetUpdated[]>([]);

    const [lastTimeFired, setLastTimeFired] = useState<number>(Date.now());

    useEffect(() => {
        store.init(setInputValue, setSelectValue);

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
                <Select selectValue={selectValue} setSelectValue={setSelectValue} />
            </FiltersContainer>

            <Cards filterAssets={filterAssets} />
        </Container>
    );
};

export default Assets;
