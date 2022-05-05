import { Dispatch, SetStateAction } from "react";

class Store {
    private store = "@zoe-zoe-financial-market";
    private _inputValue = `${this.store}:inputValue`;

    initInputValue(setInputValue: Dispatch<SetStateAction<string>>) {
        localStorage.getItem(this._inputValue)
            ? setInputValue(localStorage.getItem(this._inputValue)!)
            : localStorage.setItem(this._inputValue, "");
    }

    setInputValue(value: string) {
        localStorage.setItem(this._inputValue, value.trim());
    }

    get inputValue() {
        return this._inputValue;
    }
}

export default new Store();
