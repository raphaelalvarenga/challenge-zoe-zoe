import Select from "..";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { SingleValue } from "react-select";
import { ISelectValue } from "../../../interfaces/SelectValue.interface";
import GlobalStyles from "../../GlobalStyles";

export default {
    title: "shared/components/Select",
    component: Select,
} as ComponentMeta<typeof Select>;

export const Primary: ComponentStory<typeof Select> = () => {
    const [selectValue, setSelectValue] = useState<SingleValue<ISelectValue>>({
        value: "all",
        label: "All",
    });

    return (
        <GlobalStyles>
            <Select selectValue={selectValue} setSelectValue={setSelectValue} />
        </GlobalStyles>
    );
};
