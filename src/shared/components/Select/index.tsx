import { Dispatch, FC, SetStateAction } from "react";
import ReactSelect, { SingleValue } from "react-select";
import { ISelectValue } from "../../interfaces/SelectValue.interface";
import store from "../../classes/Store.class";
import { SelectContainer } from "./style";

interface ISelect {
    selectValue: SingleValue<ISelectValue>;
    setSelectValue: Dispatch<SetStateAction<SingleValue<ISelectValue>>>;
}

const Select: FC<ISelect> = ({ selectValue, setSelectValue }) => {
    const handleSelect = (newValue: SingleValue<{ value: string; label: string }>) => {
        store.setSelectValue(newValue);
        setSelectValue(newValue);
    };

    return (
        <SelectContainer data-testid="select-container">
            <ReactSelect
                value={selectValue}
                name="assetType"
                options={[
                    { value: "all", label: "All" },
                    { value: "stock", label: "Stock" },
                    { value: "currency", label: "Currency" },
                ]}
                onChange={handleSelect}
            />
        </SelectContainer>
    );
};

export default Select;
