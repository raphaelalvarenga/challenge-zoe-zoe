import { ComponentMeta, ComponentStory } from "@storybook/react";
import Cards from "..";
import GlobalStyles from "../../GlobalStyles";

export default {
    title: "shared/components/Cards",
    component: Cards,
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = args => (
    <GlobalStyles>
        <Cards {...args} />
    </GlobalStyles>
);

export const Primary = Template.bind({});

Primary.args = {
    filterAssets: () => {
        return [
            {
                id: 10000,
                assetName: "BAAAA",
                price: 24.914939396805387,
                lastUpdate: 1651787487366,
                type: "Stock",
                market: "Euronext",
                previewPrice: 24.23450655932626,
            },
            {
                id: 10010,
                assetName: "BAABA/USD",
                price: 23.83525845537163,
                lastUpdate: 1651787487412,
                type: "Currency",
                previewPrice: 23.216024821489654,
            },
            {
                id: 10001,
                assetName: "BAAAB",
                price: 28.92005282115966,
                lastUpdate: 1651787487432,
                type: "Stock",
                market: "Euronext",
                previewPrice: 27.96764322432284,
            },
            {
                id: 10011,
                assetName: "BAABB/USD",
                price: 19.723377296908307,
                lastUpdate: 1651787487450,
                type: "Currency",
                previewPrice: 19.104598001203236,
            },
            {
                id: 10002,
                assetName: "BAAAC",
                price: 14.81581411797643,
                lastUpdate: 1651787487465,
                type: "Stock",
                market: "Nasdaq",
                previewPrice: 14.244701366224778,
            },
            {
                id: 10012,
                assetName: "BAABC/USD",
                price: 18.08102941614409,
                lastUpdate: 1651787487480,
                type: "Currency",
                previewPrice: 17.47290914237106,
            },
            {
                id: 10003,
                assetName: "BAAAD",
                price: 16.003997871608735,
                lastUpdate: 1651787487494,
                type: "Stock",
                market: "Nasdaq",
                previewPrice: 16.2037038572279,
            },
            {
                id: 10013,
                assetName: "BAABD/USD",
                price: 16.67569950578637,
                lastUpdate: 1651787487510,
                type: "Currency",
                previewPrice: 16.099916940466375,
            },
            {
                id: 10004,
                assetName: "BAAAE",
                price: 23.44222714133895,
                lastUpdate: 1651787487523,
                type: "Stock",
                market: "Euronext",
                previewPrice: 22.807631865458607,
            },
            {
                id: 10014,
                assetName: "BAABE/USD",
                price: 25.023332805279708,
                lastUpdate: 1651787487538,
                type: "Currency",
                previewPrice: 24.250951266448034,
            },
            {
                id: 10005,
                assetName: "BAAAF",
                price: 30.735215519593872,
                lastUpdate: 1651787487551,
                type: "Stock",
                market: "Nasdaq",
                previewPrice: 30.924612657064966,
            },
            {
                id: 10015,
                assetName: "BAABF/USD",
                price: 26.95349622722032,
                lastUpdate: 1651787487564,
                type: "Currency",
                previewPrice: 26.36322482746574,
            },
            {
                id: 10006,
                assetName: "BAAAG",
                price: 24.07257831320315,
                lastUpdate: 1651787487577,
                type: "Stock",
                market: "Euronext",
                previewPrice: 24.237440415719934,
            },
            {
                id: 10016,
                assetName: "BAABG/USD",
                price: 18.249678022699584,
                lastUpdate: 1651787487590,
                type: "Currency",
                previewPrice: 17.651622762352524,
            },
            {
                id: 10007,
                assetName: "BAAAH",
                price: 22.741864056137572,
                lastUpdate: 1651787487605,
                type: "Stock",
                market: "Nasdaq",
                previewPrice: 22.868837873115677,
            },
            {
                id: 10017,
                assetName: "BAABH/USD",
                price: 20.22965426698745,
                lastUpdate: 1651787487618,
                type: "Currency",
                previewPrice: 19.317716873303528,
            },
            {
                id: 10008,
                assetName: "BAAAJ",
                price: 19.16899286256878,
                lastUpdate: 1651787487631,
                type: "Stock",
                market: "Euronext",
                previewPrice: 19.563129014369004,
            },
            {
                id: 10018,
                assetName: "BAABJ/USD",
                price: 19.108352754797497,
                lastUpdate: 1651787487643,
                type: "Currency",
                previewPrice: 19.421290236850844,
            },
            {
                id: 10009,
                assetName: "BAAAK",
                price: 13.797504611039695,
                lastUpdate: 1651787487658,
                type: "Stock",
                market: "Euronext",
                previewPrice: 13.297305328047356,
            },
            {
                id: 10019,
                assetName: "BAABK/USD",
                price: 21.207474860618863,
                lastUpdate: 1651787487671,
                type: "Currency",
                previewPrice: 20.57542560467957,
            },
        ];
    },
};
