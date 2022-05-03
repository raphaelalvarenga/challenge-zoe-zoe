import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "..";

export default {
    title: "shared/components/Card",
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card />;

export const PrimaryCard = Template.bind({});
