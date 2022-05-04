import { Container, FiltersContainer, CardsContainer } from "./style";
import Input from "../../shared/components/Input";
import Card from "../../shared/components/Card";
import { useEffect, useState } from "react";
import dataStream from "../../data";
import { IAssetUpdated } from "../../shared/interfaces/AssetUpdated.interface";
import Select, { SingleValue } from "react-select";

let loadedAssets: IAssetUpdated[] = [];

const Assets = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectValue, setSelectValue] = useState<SingleValue<{ value: string; label: string }>>({
        value: "all",
        label: "All",
    });

    const [assets, setAssets] = useState<IAssetUpdated[]>([]);

    const [lastTimeFired, setLastTimeFired] = useState<number>(Date.now());

    const [filteredAssets, setFilteredAssets] = useState<IAssetUpdated[]>([]);

    useEffect(() => {
        const subscription = dataStream.subscribe({
            next: res => {
                loadedAssets = [
                    ...loadedAssets.filter(asset => asset.id !== res.id),
                    { ...res, previewPrice: res.price },
                ];

                if (Date.now() - lastTimeFired >= 1000) {
                    setAssets(loadedAssets);
                    setFilteredAssets(loadedAssets);
                    setLastTimeFired(Date.now());
                }
            },
            error: e => console.log(e),
        });

        return () => {
            subscription.unsubscribe();
        };

        // dataStream.subscribe(
        //     res => {
        //         assetsTest.push(res);
        //         // setAssets()
        //     },
        //     error => console.log(error)
        // );
        // zip(dataStream, timer(0, 1000))
        //     .pipe(map(([delayedInput, _timer]) => delayedInput))
        //     .subscribe(
        //         result => {
        //             setAssets([...assets, { ...result, previewPrice: result.price }]);
        //         },
        //         error => console.log(error)
        //     );
        // dataStream.pipe(toArray()).subscribe(
        //     result => {
        //         console.log("teste");
        //         console.log(result);
        //         // setAssets(prev => [...prev, { ...result, previewPrice: result.price }]);
        //     },
        //     error => console.log(error)
        // );
    }, []);

    useEffect(() => {
        if (selectValue?.value === "all") {
            setFilteredAssets(assets);
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
                    options={[
                        { value: "all", label: "All" },
                        { value: "stock", label: "Stock" },
                        { value: "currency", label: "Currency" },
                    ]}
                    onChange={(newValue: SingleValue<{ value: string; label: string }>) => setSelectValue(newValue)}
                />
            </FiltersContainer>

            <CardsContainer>
                {filteredAssets
                    .filter(asset => asset.assetName.includes(inputValue.toUpperCase()))
                    .map(asset => (
                        <Card key={asset.id} asset={asset} />
                    ))}
            </CardsContainer>
        </Container>
    );
};

export default Assets;
