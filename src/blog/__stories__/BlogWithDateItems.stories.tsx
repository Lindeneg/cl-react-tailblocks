import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_ENTRIES_WITH_DATE } from "./mock-data";
import {
  BlogWithDateItems,
  BlogWithDateItemsProps,
} from "../BlogWithDateItems";

export default {
  title: "Blog/BlogWithDateItems",
  component: BlogWithDateItems,
} as Meta;

const MetaComp: Story<BlogWithDateItemsProps> = (args) => (
  <BlogWithDateItems {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_ENTRIES_WITH_DATE,
  theme: "light",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_ENTRIES_WITH_DATE,
  theme: "dark",
};