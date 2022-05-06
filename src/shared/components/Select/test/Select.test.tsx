import { render, screen } from "@testing-library/react";
import { useState } from "react";
import { SingleValue } from "react-select";
import Select from "..";
import { ISelectValue } from "../../../interfaces/SelectValue.interface";

const MockedSelect = () => {
    const [selectValue, setSelectValue] = useState<SingleValue<ISelectValue>>({
        value: "all",
        label: "All",
    });

    return <Select selectValue={selectValue} setSelectValue={setSelectValue} />;
};

describe("select tests", () => {
    it("tests if select is in the document", () => {
        render(<MockedSelect />);

        const select = screen.getByTestId("select-container");

        expect(select).toBeInTheDocument();
    });

    it("tests if select starts with value 'all'", () => {
        render(<MockedSelect />);

        const select = screen.getByTestId("select-container");

        expect(select.getElementsByTagName("input")[1]).toHaveValue("all");
    });
});
