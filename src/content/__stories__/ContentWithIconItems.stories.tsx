import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_DATA_ICON_ENTRIES } from "./mock-data";
import {
  ContentWithIconItems,
  ContentWithIconItemsProps,
} from "../ContentWithIconItems";

export default {
  title: "Content/ContentWithIconItems",
  component: ContentWithIconItems,
} as Meta;

const MetaComp: Story<ContentWithIconItemsProps> = (args) => (
  <ContentWithIconItems {...args} />
);

const MOCK_DATA = { data: MOCK_DATA_ICON_ENTRIES } as Pick<
  ContentWithIconItemsProps,
  "data"
>;

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_DATA,
  theme: "light",
  color: "indigo",
  buttonText: "Button",
  title: "Pitchfork Kickstarter Taxidermy",
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_DATA,
  theme: "dark",
  color: "indigo",
  buttonText: "Button",
  title: "Pitchfork Kickstarter Taxidermy",
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
