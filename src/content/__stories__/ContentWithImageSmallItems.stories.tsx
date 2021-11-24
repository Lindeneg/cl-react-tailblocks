import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_DATA_SMALL_IMAGE_ENTRIES } from "./mock-data";
import {
  ContentWithImageSmallItems,
  ContentWithImageSmallItemsProps,
} from "../ContentWithImageSmallItems";

export default {
  title: "Content/WithImage",
  component: ContentWithImageSmallItems,
  argTypes: {},
} as Meta;

const MetaComp: Story<ContentWithImageSmallItemsProps> = (args) => (
  <ContentWithImageSmallItems {...args} />
);

export const SmallItems = MetaComp.bind({});
SmallItems.args = {
  theme: "light",
  color: "indigo",
  data: MOCK_DATA_SMALL_IMAGE_ENTRIES,
  title: "Pitchfork Kickstarter Taxidermy",
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
};
