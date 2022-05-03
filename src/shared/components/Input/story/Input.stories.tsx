import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "..";

export default {
    title: "shared/components/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input />;

export const PrimaryInput = Template.bind({});
