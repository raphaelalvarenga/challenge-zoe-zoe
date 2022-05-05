import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Input from "..";
import GlobalStyles from "../../GlobalStyles";

export default {
    title: "shared/components/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => {
    return (
        <GlobalStyles>
            <Input {...args} />
        </GlobalStyles>
    );
};

export const Primary = Template.bind({});

Primary.args = {
    inputValue: "",
    setInputValue: () => {},
};
