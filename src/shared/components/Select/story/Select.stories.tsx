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

const Template: ComponentStory<typeof Select> = args => {
    const [selectValue, setSelectValue] = useState<SingleValue<ISelectValue>>({
        value: "all",
        label: "All",
    });

    return (
        <GlobalStyles>
            <Select {...args} />
        </GlobalStyles>
    );
};

export const Primary = Template.bind({});

Primary.args = {
    selectValue: {
        value: "all",
        label: "All",
    },

    setSelectValue: () => {},
};
