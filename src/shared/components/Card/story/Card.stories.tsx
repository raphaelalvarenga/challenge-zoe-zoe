import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "..";
import { createGlobalStyle } from "styled-components";
import GlobalStyles from "../../GlobalStyles";

export default {
    title: "shared/components/Card",
    component: Card,
} as ComponentMeta<typeof Card>;

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: Arial;
    box-sizing: border-box;
}
`;

const Template: ComponentStory<typeof Card> = args => (
    <GlobalStyles>
        <Card {...args} />
    </GlobalStyles>
);

export const BullStockCard = Template.bind({});
export const BearStockCard = Template.bind({});
export const BullCurrencyCard = Template.bind({});
export const BearCurrencyCard = Template.bind({});

BullStockCard.args = {
    asset: {
        id: 1,
        assetName: "BABEC",
        type: "Stock",
        price: 18.7326,
        market: "Nasdaq",
        lastUpdate: new Date().getTime(),
        previewPrice: 18.7322,
    },
};

BearStockCard.args = {
    asset: {
        id: 2,
        assetName: "BABKJ",
        type: "Stock",
        price: 25.0411,
        market: "Nasdaq",
        lastUpdate: new Date().getTime(),
        previewPrice: 25.0413,
    },
};

BullCurrencyCard.args = {
    asset: {
        id: 3,
        assetName: "BADKE/USD",
        type: "Currency",
        price: 28.2342,
        lastUpdate: new Date().getTime(),
        previewPrice: 28.2341,
    },
};

BearCurrencyCard.args = {
    asset: {
        id: 4,
        assetName: "BADEE/USD",
        type: "Currency",
        price: 14.7544,
        lastUpdate: new Date().getTime(),
        previewPrice: 14.7545,
    },
};
