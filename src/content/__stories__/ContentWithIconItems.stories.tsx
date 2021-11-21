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

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_DATA_ICON_ENTRIES,
  theme: "light",
  color: "indigo",
  buttonText: "Button",
  title: "Pitchfork Kickstarter Taxidermy",
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_DATA_ICON_ENTRIES,
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
