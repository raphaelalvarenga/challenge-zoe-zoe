import { Dispatch, SetStateAction } from "react";
import { SingleValue } from "react-select";
import { ISelectValue } from "../interfaces/SelectValue.interface";

class Store {
    private store = "@zoe-zoe-financial-market";
    private _inputValue = `${this.store}:inputValue`;
    private _selectValue = `${this.store}:selectValue`;

    init(
        setInputValue: Dispatch<SetStateAction<string>>,
        setSelectValue: Dispatch<SetStateAction<SingleValue<ISelectValue>>>
    ) {
        localStorage.getItem(this._inputValue)
            ? setInputValue(localStorage.getItem(this._inputValue)!)
            : localStorage.setItem(this._inputValue, "");

        localStorage.getItem(this._selectValue)
            ? setSelectValue(JSON.parse(localStorage.getItem(this._selectValue)!))
            : localStorage.setItem(
                  this._selectValue,
                  JSON.stringify({
                      value: "all",
                      label: "All",
                  })
              );
    }

    setInputValue(value: string) {
        localStorage.setItem(this._inputValue, value.trim());
    }

    get inputValue() {
        return this._inputValue;
    }
}

export default new Store();
