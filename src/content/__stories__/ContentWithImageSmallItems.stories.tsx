import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_DATA_SMALL_IMAGE_ENTRIES } from "./mock-data";
import {
  ContentWithImageSmallItems,
  ContentWithImageSmallItemsProps,
} from "../ContentWithImageSmallItems";

export default {
  title: "Content/ContentWithImageSmallItems",
  component: ContentWithImageSmallItems,
} as Meta;

const MetaComp: Story<ContentWithImageSmallItemsProps> = (args) => (
  <ContentWithImageSmallItems {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_DATA_SMALL_IMAGE_ENTRIES,
  theme: "light",
  color: "indigo",
  title: "Pitchfork Kickstarter Taxidermy",
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_DATA_SMALL_IMAGE_ENTRIES,
  theme: "dark",
  color: "indigo",
  title: "Pitchfork Kickstarter Taxidermy",
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
