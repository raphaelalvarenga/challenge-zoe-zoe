import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "..";
import GlobalStyles from "../../GlobalStyles";

export default {
    title: "shared/components/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => (
    <GlobalStyles>
        <Input {...args} />
    </GlobalStyles>
);

export const PrimaryInput = Template.bind({});

PrimaryInput.args = {
    inputValue: "",
    setInputValue: () => {},
};
